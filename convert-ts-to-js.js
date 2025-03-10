// Script để chuyển đổi tất cả các file Vue từ TypeScript sang JavaScript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Lấy đường dẫn hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hàm đệ quy để tìm tất cả các file Vue trong thư mục
function findVueFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findVueFiles(filePath, fileList);
    } else if (path.extname(file) === '.vue') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Hàm chuyển đổi file Vue từ TypeScript sang JavaScript
function convertTsToJs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Thay đổi <script lang="ts" setup> thành <script setup>
  content = content.replace(/<script\s+lang=["']ts["']\s+setup>/g, '<script setup>');
  content = content.replace(/<script\s+setup\s+lang=["']ts["']>/g, '<script setup>');
  
  // Loại bỏ các kiểu dữ liệu TypeScript trong ref
  content = content.replace(/ref<[^>]+>\(/g, 'ref(');
  
  // Loại bỏ các kiểu dữ liệu TypeScript trong reactive
  content = content.replace(/reactive<[^>]+>\(/g, 'reactive(');
  
  // Chuyển đổi defineProps từ TypeScript sang JavaScript
  content = content.replace(/defineProps<([^>]+)>\(\)/g, (match, types) => {
    // Phân tích cú pháp TypeScript đơn giản
    const props = types.match(/(\w+)\s*:\s*([^;]+)/g) || [];
    
    let result = 'defineProps({\n';
    props.forEach(prop => {
      const [name, type] = prop.split(':').map(s => s.trim());
      
      // Xử lý các kiểu dữ liệu cơ bản
      if (type === 'string') {
        result += `  ${name}: { type: String, required: true },\n`;
      } else if (type === 'number') {
        result += `  ${name}: { type: Number, required: true },\n`;
      } else if (type === 'boolean') {
        result += `  ${name}: { type: Boolean, required: true },\n`;
      } else if (type.includes('|')) {
        // Xử lý union types
        if (type.includes('"') || type.includes("'")) {
          // Enum string
          const values = type.match(/["']([^"']+)["']/g).map(v => v.replace(/["']/g, ''));
          result += `  ${name}: { 
    type: String, 
    required: true,
    validator: (value) => [${values.map(v => `'${v}'`).join(', ')}].includes(value)
  },\n`;
        } else {
          result += `  ${name}: { type: [${type.split('|').map(t => t.trim()).join(', ')}], required: true },\n`;
        }
      } else {
        result += `  ${name}: { required: true },\n`;
      }
    });
    
    result += '})';
    return result;
  });
  
  // Ghi lại nội dung đã chuyển đổi
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Đã chuyển đổi: ${filePath}`);
}

// Thư mục gốc của dự án
const rootDir = path.resolve(__dirname, 'src');

// Tìm tất cả các file Vue
const vueFiles = findVueFiles(rootDir);

// Chuyển đổi từng file
vueFiles.forEach(file => {
  convertTsToJs(file);
});

console.log(`Đã chuyển đổi ${vueFiles.length} file Vue từ TypeScript sang JavaScript.`); 