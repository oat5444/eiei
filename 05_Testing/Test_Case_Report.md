# Test Case Report
 
## Summary
รายงานผลการทดสอบระบบ (System Testing) ครอบคลุมฟังก์ชันการทำงานหลัก (Functional Testing) และส่วนติดต่อผู้ใช้ (UI Testing) จำนวน 12 กรณีทดสอบ (Test Cases)
 
| Test Case ID | Test Scenario (สถานการณ์การทดสอบ) | Test Steps (ขั้นตอนการทดสอบ) | Test Data (ข้อมูลนำเข้า) | Expected Result (ผลลัพธ์ที่คาดหวัง) | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC01** | ตรวจสอบการสร้างรหัสผ่านค่าเริ่มต้น | 1. เปิดหน้าเว็บ<br>2. กดปุ่ม "Generate Password" | Length: 16<br>Options: All Checked | รหัสผ่านปรากฏในช่องแสดงผล ความยาว 16 ตัวอักษร ประกอบด้วยตัวอักษรใหญ่ เล็ก ตัวเลข และสัญลักษณ์ | As Expected | ✅ Pass |
| **TC02** | ตรวจสอบการปรับความยาวต่ำสุด (Min Length) | 1. เลื่อน Slider ไปทางซ้ายสุด<br>2. กดปุ่ม Generate | Length: 4 | รหัสผ่านมีความยาว 4 ตัวอักษร | As Expected | ✅ Pass |
| **TC03** | ตรวจสอบการปรับความยาวสูงสุด (Max Length) | 1. เลื่อน Slider ไปทางขวาสุด<br>2. กดปุ่ม Generate | Length: 32 | รหัสผ่านมีความยาว 32 ตัวอักษร | As Expected | ✅ Pass |
| **TC04** | ตรวจสอบตัวเลือก "เฉพาะตัวเลข" (Numbers Only) | 1. ติ๊กออกทุกช่อง ยกเว้น "Include Numbers"<br>2. กดปุ่ม Generate | Option: Numbers Only | รหัสผ่านประกอบด้วยตัวเลข (0-9) ล้วน ไม่มีตัวอักษรอื่นปน | As Expected | ✅ Pass |
| **TC05** | ตรวจสอบกรณีไม่เลือกตัวเลือกใดเลย (Validation) | 1. ติ๊กออกทุกช่อง (Uncheck All)<br>2. กดปุ่ม Generate | Option: None | ระบบแสดงข้อความแจ้งเตือน (Toast) ว่า "Please select options!" และไม่สร้างรหัสผ่าน | As Expected | ✅ Pass |
| **TC06** | ตรวจสอบฟังก์ชันคัดลอก (Copy Button) | 1. กดปุ่ม Generate<br>2. กดไอคอน Copy ด้านขวาของช่องรหัส | - | 1. แสดงข้อความแจ้งเตือน "Copied to clipboard!"<br>2. ไอคอนเปลี่ยนเป็นเครื่องหมายถูก<br>3. สามารถ Paste รหัสผ่านที่ถูกต้องได้ | As Expected | ✅ Pass |
| **TC07** | ตรวจสอบระดับความปลอดภัย "Weak" | 1. ปรับความยาวเป็น 6<br>2. เลือกเฉพาะ Lowercase<br>3. กด Generate | Length: 6<br>Option: Lowercase | แถบ Strength Meter แสดงสีแดง และข้อความระบุว่า "WEAK" | As Expected | ✅ Pass |
| **TC08** | ตรวจสอบระดับความปลอดภัย "Strong" | 1. ปรับความยาวเป็น 16<br>2. เลือกทุกตัวเลือก (All)<br>3. กด Generate | Length: 16<br>Option: All | แถบ Strength Meter แสดงสีเขียว และข้อความระบุว่า "STRONG" | As Expected | ✅ Pass |
| **TC09** | ตรวจสอบการทำงานของประวัติ (History Limit) | 1. กดปุ่ม Generate ต่อเนื่องกัน 5 ครั้ง | - | ส่วน History แสดงรหัสผ่านล่าสุดเพียง 3 รายการเท่านั้น (รายการเก่าสุดถูกดันออก) | As Expected | ✅ Pass |
| **TC10** | ตรวจสอบการคัดลอกรหัสจากประวัติ (History Copy) | 1. คลิกที่รายการรหัสผ่านใน History List | - | แสดงข้อความแจ้งเตือน "Copied to clipboard!" และสามารถ Paste รหัสได้ถูกต้อง | As Expected | ✅ Pass |
| **TC11** | ตรวจสอบการเปลี่ยนธีม (Theme Toggle) | 1. กดปุ่มไอคอนพระอาทิตย์มุมขวาบน | - | 1. พื้นหลังเปลี่ยนเป็นสีสว่าง (Light Mode)<br>2. ไอคอนเปลี่ยนเป็นรูปพระจันทร์ | As Expected | ✅ Pass |
| **TC12** | ตรวจสอบการแสดงผลบนมือถือ (Responsive) | 1. ย่อหน้าจอ Browser ให้แคบลง (หรือใช้ DevTools เลือก Mobile View) | Screen width < 500px | การ์ดแสดงผลอยู่กึ่งกลาง ไม่ล้นหน้าจอ ปุ่มกดและ Slider สามารถใช้งานได้ปกติด้วยการสัมผัส | As Expected | ✅ Pass |