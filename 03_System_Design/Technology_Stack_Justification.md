# Technology Stack Justification
 
เอกสารฉบับนี้อธิบายเหตุผลประกอบการตัดสินใจเลือกใช้เทคโนโลยี เครื่องมือ และสถาปัตยกรรมสำหรับโครงการ "Random Password Generator"
 
## 1. Frontend Technologies
 
### **HTML5 (HyperText Markup Language)**
* **บทบาท:** ใช้สร้างโครงสร้างพื้นฐานของหน้าเว็บ (Structure)
* **เหตุผลที่เลือก:** เป็นมาตรฐานสากลของเว็บไซต์ (Web Standard) ที่เบราว์เซอร์ทุกตัวรองรับ รองรับ Semantic Elements ซึ่งช่วยเรื่อง Accessibility
 
### **CSS3 (Cascading Style Sheets)**
* **บทบาท:** ใช้ตกแต่งหน้าตา (Styling) และจัดการ Layout
* **เหตุผลที่เลือก:**
    * **CSS Variables:** เลือกใช้ `:root` variables เพื่อทำระบบเปลี่ยนธีม (Dark/Light Theme) ได้อย่างมีประสิทธิภาพโดยไม่ต้องใช้ JavaScript จำนวนมาก
    * **Flexbox:** ใช้จัดการ Layout ให้รองรับ Responsive Design ได้ง่าย
    * **Performance:** การเขียน CSS เอง (Custom CSS) ทำให้ไฟล์มีขนาดเล็กกว่าการใช้ Framework ใหญ่ๆ เช่น Bootstrap หรือ Tailwind สำหรับโปรเจกต์ขนาดเล็ก
 
### **JavaScript (Vanilla ES6+)**
* **บทบาท:** ใช้จัดการตรรกะการทำงาน (Logic) และการโต้ตอบกับผู้ใช้ (Interactivity)
* **เหตุผลที่เลือก:**
    * **No Framework Overhead:** โปรเจกต์นี้มีความซับซ้อนไม่มาก การใช้ Pure JavaScript (Vanilla) ช่วยให้เว็บโหลดเร็วที่สุดและไม่มีไฟล์ขยะเกินความจำเป็น
    * **Client-Side Execution:** การประมวลผลทั้งหมดเกิดขึ้นที่ฝั่งผู้ใช้ (Browser) ทำให้ไม่ต้องมีการส่งข้อมูลไปมาระหว่าง Server ซึ่งช่วยเรื่องความปลอดภัยของข้อมูลส่วนตัว
 
## 2. Tools & Utilities
 
### **PlantUML**
* **บทบาท:** ใช้สร้างแผนภาพสถาปัตยกรรมและ Flowchart (Diagram-as-Code)
* **เหตุผลที่เลือก:** สามารถแก้ไขแผนภาพได้ง่ายผ่านการแก้โค้ดตัวอักษร ไม่ต้องวาดใหม่ และเก็บ Version Control ได้ง่าย
 
### **Git**
* **บทบาท:** ระบบควบคุมเวอร์ชัน (Version Control)
* **เหตุผลที่เลือก:** เป็นมาตรฐานอุตสาหกรรม ช่วยในการจัดการประวัติการแก้ไขโค้ดและสำรองข้อมูล
 
## 3. Architecture Pattern
 
### **Client-Side Only (Static Web App)**
* **ลักษณะ:** แอปพลิเคชันทำงานจบครบใน Browser ของผู้ใช้งาน ไม่มี Backend Server
* **เหตุผลที่เลือก:**
    * **Security:** ปลอดภัยสูงสุดเพราะไม่มีการเก็บรหัสผ่านที่สร้างขึ้นไว้ในฐานข้อมูลใดๆ
    * **Cost-Effective:** ไม่มีค่าใช้จ่ายในการเช่า Server สามารถโฮสต์ผ่านบริการฟรีเช่น GitHub Pages ได้
    * **Offline Capability:** เมื่อโหลดหน้าเว็บเสร็จแล้ว สามารถใช้งานต่อได้แม้ไม่มีอินเทอร์เน็ต