# 📘 Claude Cowork Agent — คู่มืออบรมฉบับ MRG
> **บริษัท มารีนโกลด์โปรดักส์ จำกัด (Marine Gold Products Ltd.)**
> หลักสูตรการใช้ AI เพื่อยกระดับการทำงาน — สอดคล้องกับปรัชญา **"Be Better"**
> เนื้อหาเฉพาะ Claude & Cowork | อัปเดต 2026

---

## 🏭 วิเคราะห์บริษัทและบริบทการอบรม

### ภาพรวม Marine Gold Products (MRG)

| ข้อมูล | รายละเอียด |
|--------|-----------|
| ชื่อบริษัท | บริษัท มารีนโกลด์โปรดักส์ จำกัด |
| ก่อตั้ง | 21 พฤศจิกายน 2543 |
| ธุรกิจหลัก | ผู้ส่งออกผลิตภัณฑ์กุ้งและอาหารทะเลแช่แข็งชั้นนำระดับโลก |
| กำลังการผลิต | มากกว่า 60 ตัน/วัน (4+ ตู้คอนเทนเนอร์) |
| จำนวนพนักงาน | 3,100+ คน |
| ตลาดส่งออก | สหรัฐอเมริกา, แคนาดา, สหราชอาณาจักร, EU, เอเชีย |
| วิสัยทัศน์ | "พันธมิตรด้านอาหารระดับโลกที่ดีที่สุดเพื่อชีวิตที่ดีขึ้น" |
| ปรัชญาองค์กร | **Be Better** — พัฒนาตนเองอย่างต่อเนื่องในทุกด้าน |

### กลุ่มสินค้าหลัก
- **กุ้งดิบ** — กุ้งขาว กุ้งแม่น้ำ รูปแบบต่างๆ
- **กุ้งสุก** — กุ้งสุกแช่แข็ง เนื้อกุ้งต้ม ลูกชิ้นกุ้ง
- **สินค้าแปรรูปและอาหารทะเล** — กุ้งบดปรุงรส หมึกผัดซอส และอื่นๆ

### การวิเคราะห์ความต้องการของพนักงาน

จากการวิเคราะห์ลักษณะธุรกิจ MRG พนักงานแต่ละฝ่ายมีความต้องการใช้ AI ดังนี้:

| ฝ่ายงาน | งานที่ทำซ้ำบ่อย | AI ช่วยได้อย่างไร |
|---------|----------------|-----------------|
| **Export & Sales** | เอกสารส่งออก Invoice, Packing List, COO | สร้าง Template, ตรวจทาน, แปลภาษา |
| **QA / Production** | รายงาน QC, SOP, บันทึกการผลิต | สร้าง SOP, วิเคราะห์ข้อมูลคุณภาพ |
| **HR / Training** | ประกาศรับสมัคร, เอกสาร Training, Payroll | สร้างเอกสาร HR, สรุปรายงาน |
| **Marketing** | Content สินค้า, รายงานตลาด, งาน THAIFEX | เขียน Content, Research ตลาด |
| **Logistics** | ติดตามสินค้า, รายงานการจัดส่ง | สรุป/วิเคราะห์ข้อมูล Logistics |
| **บัญชี/การเงิน** | รายงาน Excel, งบประมาณ, ใบแจ้งหนี้ | Excel Dashboard, ตรวจสอบตัวเลข |

### เป้าหมายหลักสูตรนี้

> ให้พนักงาน MRG ทุกคนสามารถใช้ Claude Cowork เป็นผู้ช่วยส่วนตัวในงานประจำวัน
> เพื่อ **Be Better** — ทำงานได้ดีขึ้น เร็วขึ้น และมีเวลาโฟกัสกับสิ่งที่สร้างคุณค่าแท้จริง

---

## สารบัญ

- [Module 1 — รู้จัก AI Agent กับการทำงานที่ MRG](#module-1--รู้จัก-ai-agent-กับการทำงานที่-mrg)
- [Module 2 — เริ่มต้นใช้ Claude Cowork](#module-2--เริ่มต้นใช้-claude-cowork)
- [Module 3 — สร้างเอกสาร Word / Excel / PPT / PDF](#module-3--สร้างเอกสาร-word--excel--ppt--pdf)
- [Module 4 — วิเคราะห์ข้อมูลการผลิตและการส่งออก](#module-4--วิเคราะห์ข้อมูลการผลิตและการส่งออก)
- [Module 5 — Research + สรุปรายงานตลาดโลก](#module-5--research--สรุปรายงานตลาดโลก)
- [Module 6 — เขียน Content / Email / เอกสารภาษาอังกฤษ](#module-6--เขียน-content--email--เอกสารภาษาอังกฤษ)
- [Module 7 — เชื่อมต่อ Google Drive / Canva](#module-7--เชื่อมต่อ-google-drive--canva)
- [Module 8 — ตั้งเวลาทำงานอัตโนมัติ (Scheduled Tasks)](#module-8--ตั้งเวลาทำงานอัตโนมัติ)
- [Module 9 — สร้าง Web App และ Dashboard](#module-9--สร้าง-web-app-และ-dashboard)
- [Module 10 — Connectors (Google Calendar / Plugins / Telegram)](#module-10--connectors)
- [Module 11 — Skills เฉพาะฝ่ายงาน MRG](#module-11--skills-เฉพาะฝ่ายงาน-mrg)
- [Module 12 — Personal Plugins สำหรับทีมงาน](#module-12--personal-plugins)
- [Module 13 — สั่งงาน Cowork ผ่าน Telegram (3 วิธี)](#module-13--สั่งงาน-cowork-ผ่าน-telegram)
- [Module 14 — Claude Dispatch 🆕](#module-14--claude-dispatch-)
- [Module 15 — Projects จัดการงานเป็นระบบ 🆕](#module-15--projects-)
- [เนื้อหาเพิ่มเติม — อัปเดตล่าสุด 2026](#-เนื้อหาเพิ่มเติม--อัปเดตล่าสุด-2026)
- [แผนการอบรม 4 สัปดาห์สำหรับ MRG](#-แผนการอบรม-4-สัปดาห์สำหรับ-mrg)

---

## Module 1 — รู้จัก AI Agent กับการทำงานที่ MRG

### 1.1 AI Agent คืออะไร — ในบริบทของ MRG

AI Agent คือ **"พนักงานดิจิทัลที่ไม่เคยลา"** ที่สามารถช่วยงาน MRG ได้จริง:

- **เข้าใจสิ่งที่เราพิมพ์** — ทั้งภาษาไทยและอังกฤษ เหมาะกับงาน Export ที่ต้องใช้ทั้งสองภาษา
- **คิดวิเคราะห์เอง** — วางแผนขั้นตอนการทำงานให้
- **ลงมือทำจริง** — สร้าง Invoice, รายงาน QC, สรุปยอดส่งออก ได้หมด
- **ทำจนเสร็จ** — สั่งครั้งเดียว ทำต่อจนเสร็จ ไม่ต้องคอยกดทีละขั้น

### 1.2 AI Agent vs Chatbot — ต่างกันอย่างไร

| เรื่อง | Chatbot ทั่วไป | Claude Cowork (AI Agent) |
|--------|--------------|--------------------------|
| ทำอะไรได้ | ตอบคำถามในกรอบแชท | ทำงานจริง สร้างไฟล์ส่งออก วิเคราะห์ข้อมูล |
| ทำงานกี่ขั้น | ทีละคำถาม | หลายขั้นตอนต่อเนื่องจนเสร็จ |
| เข้าถึงไฟล์ | ❌ ไม่ได้ | ✅ เห็นไฟล์ในเครื่อง สร้าง แก้ไขได้ |
| เชื่อมต่อแอปอื่น | ❌ ไม่ได้ | ✅ Google Drive, Canva, Calendar |
| ทำงานอัตโนมัติ | ❌ ต้องสั่งทุกครั้ง | ✅ ตั้งเวลาให้ทำเองได้ |
| ภาษาอังกฤษ/ไทย | ⚠️ ขึ้นอยู่กับเครื่องมือ | ✅ ทั้งสองภาษา แปลได้ทันที |

### 1.3 ตัวอย่างงานที่ AI ช่วย MRG ได้จริง

**ระดับง่าย — ทำได้ทันที ไม่ต้องตั้งค่า:**

- **สรุปและวิจัย** — ค้นหาราคากุ้งในตลาดโลก ข่าวอุตสาหกรรม Seafood สรุปเป็นรายงาน
- **ร่างการสื่อสาร** — เขียนอีเมลภาษาอังกฤษถึงลูกค้าต่างประเทศ ประกาศภายใน แปลเอกสาร
- **สร้างและแก้ไขเอกสาร** — ร่างรายงาน QC, SOP, บันทึก Training เป็นไฟล์ Word/PDF
- **สรุปไฟล์** — อ่านและสรุปสัญญา, ใบแจ้งหนี้, รายงานผลตรวจ

**ระดับกลาง — ต้องใช้ไฟล์ประกอบ:**

- **งานนำเสนอ** — สร้าง Pitch Deck ยอดขายรายไตรมาส สรุปผลงานบอร์ดบริหาร
- **งาน Spreadsheet** — สร้างโมเดล Excel ติดตามยอดส่งออก งบประมาณ Dashboard
- **เปรียบเทียบเอกสาร** — เปรียบเทียบ Spec สินค้า ตรวจจับความแตกต่างในสัญญา
- **จัดระเบียบไฟล์** — เปลี่ยนชื่อ จัดเรียง แปลงไฟล์เป็นชุด

**ระดับสูง — ต้องตั้งค่าหรือเชื่อมต่อ:**

- **กำหนดตารางอัตโนมัติ** — รายงานราคากุ้งทุกเช้า แจ้งเตือน Deadline ส่งออก
- **Dashboard แบบ Live** — ดึงข้อมูลจาก Google Sheets มาแสดงผลแบบ Real-time
- **Workflow ข้ามแอป** — ดึงข้อมูล Drive → วิเคราะห์ → สร้าง Report → ส่ง Telegram
- **รัน Script อัตโนมัติ** — ประมวลผลข้อมูลการผลิตตามกำหนดเวลา

### 1.4 DELEGATE Framework — หลักการมอบหมายงานให้ AI

กรอบการสั่งงาน AI ให้ได้ผลดีที่สุด:

| ตัวอักษร | ความหมาย | ตัวอย่างของ MRG |
|----------|----------|----------------|
| **D**efine | กำหนดเป้าหมายให้ชัด | "ต้องการรายงานยอดส่งออกกุ้งขาว" |
| **E**xplain | อธิบายบริบท | "ส่งให้ผู้บริหาร เพื่อประชุม BOD" |
| **L**anguage | กำหนดภาษาและโทน | "ภาษาอังกฤษ ทางการ" |
| **E**xample | ให้ตัวอย่าง | "แบบรายงานที่เคยทำ" |
| **G**uideline | กำหนดกฎ/ข้อจำกัด | "ห้ามใส่ข้อมูลลูกค้าจริง" |
| **A**ction | ระบุ action | "สร้างเป็นไฟล์ PDF" |
| **T**est | ตรวจสอบ | "ตรวจตัวเลขก่อนส่ง" |
| **E**volve | ปรับปรุง | "บันทึกเป็น Skill ไว้ใช้ซ้ำ" |

> 💡 **Tip สำหรับ MRG:** ยิ่งบอก AI ว่างานนี้ส่งใคร ส่งตลาดไหน ใช้ภาษาอะไร ผลลัพธ์จะยิ่งตรงใจมากขึ้น

---

## Module 2 — เริ่มต้นใช้ Claude Cowork

### 2.1 สมัครและติดตั้ง Claude Cowork

**ข้อกำหนด:** ต้องสมัครแผน **Pro ขึ้นไป ($20/เดือน)**

**ขั้นตอนทั้งหมด:**

1. **สมัคร Claude Account** → [claude.ai](https://claude.ai/) → Sign Up
2. **อัปเกรดเป็น Pro** → [claude.ai/upgrade](https://claude.ai/upgrade)
3. **ติดตั้ง Claude Desktop** (Windows/Mac) → [claude.com/download](https://claude.com/download) → ติดตั้ง → เปิดแอป → Login
4. **ตั้งค่า Privacy** → ปิดการนำข้อมูลไปเทรนต่อ (สำคัญ! ข้อมูลบริษัทต้องเป็นความลับ)
5. **แนะนำตัวให้ AI รู้จักเรา** → ใช้ Prompt ด้านล่าง

```
ฉันเป็นพนักงาน [ชื่อฝ่าย] ของบริษัท มารีนโกลด์โปรดักส์ จำกัด (MRG)
ธุรกิจหลักคือการผลิตและส่งออกผลิตภัณฑ์กุ้งและอาหารทะเลแช่แข็งระดับโลก
งานของฉันเกี่ยวกับ [อธิบายงานหลัก]
ลูกค้าของเราอยู่ใน [ประเทศ/ภูมิภาค]
ภาษาที่ใช้ในงาน: ภาษาไทย และ ภาษาอังกฤษ

โปรดช่วยสรุปโปรไฟล์ของฉันเป็น System Prompt สั้นๆ ไม่เกิน 1,500 ตัวอักษร
เพื่อให้คุณจำและทำงานร่วมกับฉันได้ดีขึ้น
```

> 💡 **Tip:** นำข้อความที่ได้ไปวางในส่วน **Memory** หรือ **User Preferences** ของ Claude → AI จะตอบได้ตรงบริบทงาน MRG ทุกครั้ง

### 2.2 ทำความเข้าใจหน้าจอ Claude Cowork

| ส่วน | คำอธิบาย |
|------|---------|
| ช่อง Chat (กลาง) | ที่พิมพ์สั่งงาน AI |
| ปุ่ม Attach (📎) | ลากไฟล์มาวาง หรือกดเลือกไฟล์ |
| เมนู Connectors | เชื่อมต่อ Google Drive, Canva |
| โฟลเดอร์งาน | AI จะเห็นไฟล์ในโฟลเดอร์ที่เลือก |
| Projects | Workspace แยกตามงาน/ฝ่าย (ฟีเจอร์ใหม่) |

### 2.3 Prompt แรก — ลองสั่งงาน AI

```
สร้างไฟล์ Excel รายการสินค้าส่งออกกุ้ง
มีคอลัมน์: ลำดับ, รหัสสินค้า, ชื่อสินค้า (ไทย), Product Name (ENG),
น้ำหนักสุทธิ (kg), น้ำหนักรวม (kg), ราคา FOB (USD), ตลาดส่งออก
ใส่ตัวอย่างข้อมูล 10 รายการ สำหรับกุ้งขาวแช่แข็ง
จัดรูปแบบให้สวยงาม มีสีหัวตาราง
```

**ขั้นตอน:**
1. Copy Prompt → Paste ใน Claude Cowork → กด Enter
2. รอ AI ทำงาน (สร้างไฟล์ Excel ให้อัตโนมัติ)
3. กดลิงก์ดาวน์โหลดไฟล์ .xlsx ที่ AI ส่งมา

> 💡 **Tip:** ถ้าผลลัพธ์ยังไม่ตรงใจ พิมพ์ต่อได้ทันที เช่น "เพิ่มคอลัมน์ Lot Number" หรือ "แปลงราคาเป็น THB ด้วย"

---

## Module 3 — สร้างเอกสาร Word / Excel / PPT / PDF

> **หลักการ:** สั่งประโยคเดียว ได้ไฟล์พร้อมใช้ — ไม่ต้องเปิดโปรแกรมเองเลย

### 3.1 สร้างเอกสาร Word (.docx) — บริบท MRG

**SOP / คู่มือการทำงาน:**
```
สร้าง SOP (Standard Operating Procedure) เรื่อง การรับวัตถุดิบกุ้งสด
เป็นไฟล์ Word (.docx) จัดรูปแบบมาตรฐานองค์กร

เนื้อหาประกอบด้วย:
1. วัตถุประสงค์
2. ขอบเขต
3. คำจำกัดความ
4. ขั้นตอนการปฏิบัติงาน (แบบ Step-by-step พร้อมเกณฑ์การตรวจรับ)
5. เกณฑ์การตัดสินใจรับ/ปฏิเสธวัตถุดิบ
6. บันทึกที่เกี่ยวข้อง
7. ผู้รับผิดชอบ

หัวกระดาษมีโลโก้ MRG เลขที่เอกสาร วันที่บังคับใช้ ผู้อนุมัติ
```

**บันทึกข้อความภายใน:**
```
สร้างบันทึกข้อความ (Memo) ภาษาไทย เรื่อง ขออนุมัติจัดซื้ออุปกรณ์ห้อง Lab
จาก: ฝ่าย QA
ถึง: ผู้อำนวยการฝ่ายผลิต
เนื้อหา: ขออนุมัติจัดซื้อชุดทดสอบ Salmonella Rapid Test 500 ชุด และ pH Meter 2 เครื่อง
งบประมาณรวม 45,000 บาท เพื่อรองรับการตรวจสอบที่เพิ่มขึ้น
สร้างเป็นไฟล์ Word มีหัวกระดาษ เลขที่เอกสาร วันที่ ช่องลงนาม
```

> 💡 **Tip:** บอก AI ว่าส่งใคร ส่งตลาดไหน ภาษาอะไร — AI จะปรับระดับความเป็นทางการให้ตรงเลย

### 3.2 สร้าง Excel (.xlsx) — บริบท MRG

**รายงานยอดส่งออกรายเดือน:**
```
สร้างไฟล์ Excel รายงานยอดส่งออกประจำเดือน
มี 3 Sheet:
1. ยอดส่งออก — วันที่ ตลาด สินค้า ปริมาณ (ตัน) มูลค่า (USD) สถานะ
2. เปรียบเทียบเป้า — ยอดจริง vs ยอดเป้า แต่ละตลาด
3. สรุปรายไตรมาส — ยอดรวม กำไร/ขาดทุน % เปลี่ยนแปลงจากปีที่แล้ว
ใส่สูตรคำนวณอัตโนมัติ จัดรูปแบบสวยงาม
```

**ติดตามคุณภาพการผลิต:**
```
สร้างไฟล์ Excel QC Tracking Sheet สำหรับสายการผลิตกุ้งแช่แข็ง
มีคอลัมน์: วันที่ผลิต, Lot No., สายการผลิต, จำนวน (kg),
ผลตรวจ Microbiological, ผลตรวจ Chemical, ผลตรวจ Physical,
Pass/Fail, หมายเหตุ, ผู้ตรวจ
มี Conditional Formatting: แดง = Fail, เขียว = Pass
```

### 3.3 สร้าง PowerPoint (.pptx) — บริบท MRG

```
สร้าง PowerPoint นำเสนอผลการดำเนินงาน Q1/2026 ให้คณะกรรมการบริษัท
12 สไลด์ ประกอบด้วย:
- หน้าปก MRG
- สรุปภาพรวม Q1
- ยอดส่งออกรายตลาด (กราฟ)
- เปรียบเทียบ Q1 vs เป้าหมาย
- ผลการผลิต (ปริมาณ vs คุณภาพ)
- Highlight ตลาดใหม่ที่เติบโต
- ปัญหาและการแก้ไข
- แผน Q2
- Be Better — นวัตกรรมประจำไตรมาส
- หน้าปิด
ใช้โทนสีน้ำเงิน-ขาว สไตล์ Professional เหมาะกับบอร์ดบริหาร
```

### 3.4 สร้างเอกสารภาษาอังกฤษสำหรับ Export

```
สร้าง Commercial Invoice Template เป็นไฟล์ Word ภาษาอังกฤษ
สำหรับส่งออกผลิตภัณฑ์กุ้งแช่แข็ง

รูปแบบมาตรฐาน:
- Seller: Marine Gold Products Ltd. (ใส่ที่อยู่จริง)
- Buyer: [ชื่อลูกค้า]
- Invoice No. / Date
- Description of Goods (ชื่อสินค้า, HS Code, Grade, Size)
- Quantity (Cartons / Net Weight / Gross Weight)
- Unit Price (USD/kg FOB) / Total Amount
- Country of Origin: Thailand
- Payment Terms / Incoterms
- Signature Block

จัดรูปแบบสวยงาม Professional ตามมาตรฐานการค้าระหว่างประเทศ
```

> 💡 **Tip สำหรับ MRG:** AI สามารถสร้างเอกสารได้ทั้ง ภาษาไทย ภาษาอังกฤษ หรือ 2 ภาษาในเอกสารเดียวกัน ระบุในคำสั่งได้เลย

---

## Module 4 — วิเคราะห์ข้อมูลการผลิตและการส่งออก

### 4.1 วิเคราะห์ข้อมูล Excel การผลิต

**วิธีใช้:** ลากไฟล์ Excel ไปวางในช่อง Chat แล้วพิมพ์:

```
วิเคราะห์ข้อมูลการผลิตกุ้งแช่แข็งในไฟล์นี้ให้หน่อย

อยากรู้:
1. ไลน์การผลิตไหนมี Yield สูงสุดและต่ำสุด?
2. ช่วงเวลาไหนที่ของเสีย (Waste %) สูงผิดปกติ?
3. ปริมาณการผลิตเทียบกับเป้าหมายแต่ละเดือน เป็นอย่างไร?
4. มีแนวโน้มอะไรที่น่าจับตา?

สรุปเป็น Insight สั้นๆ ที่นำไปรายงานผู้จัดการฝ่ายผลิตได้เลย
```

**วิเคราะห์ยอดส่งออก:**
```
วิเคราะห์ข้อมูลยอดส่งออกในไฟล์นี้

อยากรู้:
1. ตลาดไหนทำรายได้สูงสุด? และมีแนวโน้มอย่างไร?
2. สินค้าไหน (Grade/Size) ที่ลูกค้าต่างประเทศต้องการมากที่สุด?
3. ราคาเฉลี่ย FOB ต่อ kg เปลี่ยนแปลงอย่างไรในช่วง 6 เดือน?
4. ตลาดไหนที่ยอดลดลงและควรเฝ้าระวัง?

สรุปเป็นรายงานสั้นๆ พร้อมกราฟ
```

### 4.2 สร้าง Dashboard Interactive — ติดตามการผลิต

```
สร้าง Dashboard แบบ Interactive จากข้อมูลนี้
เป็นไฟล์ HTML ที่เปิดในเบราว์เซอร์ได้เลย

อยากได้:
- กราฟเส้นแสดงปริมาณผลิตรายวัน/รายสัปดาห์
- กราฟแท่ง Yield % แต่ละสายการผลิต
- ตัวเลข KPI: ปริมาณผลิตรวม, Yield เฉลี่ย, % ของเสีย, Pass Rate QC
- Dropdown เลือกดูทีละสายการผลิต
- Indicator สีแดง/เหลือง/เขียว ตามเกณฑ์มาตรฐาน
- โทนสีน้ำเงิน-ขาว (สีหลัก MRG)
```

### 4.3 วิเคราะห์ผลการตรวจ QC

```
วิเคราะห์ข้อมูลผล QC ในไฟล์นี้

อยากรู้:
1. Pass Rate รวมของแต่ละเดือน เป็นเท่าไหร่?
2. Lot ไหนที่ Fail บ่อยที่สุด? สาเหตุคืออะไร?
3. มี pattern อะไรไหม เช่น วันไหน/กะไหน มีปัญหาบ่อย?
4. สรุปข้อเสนอแนะ 3 ข้อ ที่ควรปรับปรุงในสายการผลิต

นำเสนอเป็นรายงานพร้อมกราฟสำหรับประชุม QA Review
```

---

## Module 5 — Research + สรุปรายงานตลาดโลก

### 5.1 Research ตลาด Seafood โลก (Real-time)

```
ช่วยค้นคว้าข้อมูลเกี่ยวกับ ตลาดกุ้งแช่แข็งโลก ปี 2025-2026

อยากรู้:
1. ราคากุ้งขาวในตลาดโลกตอนนี้ เฉลี่ยเท่าไหร่ (USD/kg)
2. ประเทศคู่แข่งหลัก (เวียดนาม, อินเดีย, เอกวาดอร์) มีสถานการณ์อย่างไร
3. ตลาดสหรัฐ/EU ยังมีความต้องการสูงไหม มีข้อจำกัดด้านกฎระเบียบอะไรใหม่บ้าง
4. แนวโน้มปี 2026 สำหรับ Seafood ส่งออก

สรุปให้กระชับ พร้อมแหล่งอ้างอิง ใช้เป็นข้อมูลประกอบการตัดสินใจทางธุรกิจ
```

### 5.2 Research กฎระเบียบการนำเข้า

```
ค้นหาข้อมูลกฎระเบียบการนำเข้าสินค้าอาหารทะเลแช่แข็งจากไทย

สำหรับตลาด: [ระบุประเทศ เช่น สหรัฐอเมริกา / EU / ญี่ปุ่น]

อยากรู้:
1. มาตรฐาน Food Safety ที่ต้องผ่าน
2. เอกสารที่ต้องใช้ในการส่งออก
3. ข้อกำหนด Labeling
4. มีการเปลี่ยนแปลงกฎระเบียบใหม่ในปีนี้ไหม
5. ค่าภาษีนำเข้า (Import Duty) ปัจจุบันเท่าไหร่

สรุปเป็นรายงานสั้นๆ พร้อมลิงก์แหล่งอ้างอิงทางการ
```

### 5.3 ติดตามคู่แข่ง

```
ทำ Competitive Research เรื่อง ผู้ส่งออกกุ้งแช่แข็งรายใหญ่จากเวียดนามและอินเดีย

อยากรู้:
1. บริษัทไหนบ้างที่เป็นคู่แข่งหลักในตลาดสหรัฐ/EU
2. กลยุทธ์ด้านราคาและสินค้าของคู่แข่ง
3. Certification ที่คู่แข่งมี (ASC, BAP, etc.)
4. จุดแข็ง-จุดอ่อนเปรียบเทียบกับ MRG

สรุปเป็นตาราง Competitive Analysis
```

### 5.4 สร้างรายงาน Word จาก Research

**สำคัญ:** ทำในแชทเดียวกันต่อจากการ Research — ห้ามเปิดแชทใหม่!

```
จากข้อมูลที่ค้นมา ช่วยสร้างเป็นรายงานตลาด Word (.docx)
หัวข้อ: รายงานวิเคราะห์ตลาดกุ้งแช่แข็งโลก ปี 2025-2026

รูปแบบ:
- หน้าปก (โลโก้ MRG)
- สารบัญ
- บทสรุปผู้บริหาร (Executive Summary)
- สถานการณ์ตลาดโลก
- คู่แข่งและตำแหน่งของ MRG
- โอกาสและความเสี่ยง
- ข้อเสนอแนะเชิงกลยุทธ์
- แหล่งอ้างอิง

จัดรูปแบบสวยงาม ใช้ภาษาอังกฤษ เหมาะสำหรับนำเสนอบอร์ดบริหาร
```

---

## Module 6 — เขียน Content / Email / เอกสารภาษาอังกฤษ

### 6.1 Email ภาษาอังกฤษถึงลูกค้าต่างประเทศ

```
ช่วยร่าง Email ภาษาอังกฤษ 3 แบบ:

1. Email แนะนำสินค้าใหม่ถึงลูกค้าใน USA
   - สินค้า: IQF White Shrimp HLSO 26/30 Organic Certified
   - จุดเด่น: ASC Certified, BAP Certified, No Chemical Treatment
   - CTA: ขอ Sample Order หรือ Video Call

2. Email ตอบข้อร้องเรียนเรื่องคุณภาพสินค้า
   - ลูกค้าแจ้งว่า Black Spot พบในล็อตล่าสุด
   - ขอโทษ อธิบายมาตรการแก้ไข ชดเชย 5% Credit

3. Email ยืนยันคำสั่งซื้อและ Shipment Schedule
   - Order: 2 FCL White Shrimp
   - ETD: 15 July 2026 from Laem Chabang Port
   - ETA: ระบุตามตลาดปลายทาง

ทุก Email ใช้โทนมืออาชีพ ตรงไปตรงมา เหมาะกับ B2B อาหาร
```

### 6.2 Content สำหรับงาน THAIFEX / Trade Show

```
เขียน Content สำหรับโปรโมทสินค้า MRG ในงาน THAIFEX

ต้องการ:
1. Company Introduction (ภาษาอังกฤษ, 200 คำ)
   เน้น: 25+ ปีในธุรกิจ, ส่งออก 60+ ตัน/วัน, Be Better Philosophy
2. Product Highlight Sheet (1 หน้า A4) สำหรับ Top 3 Products
3. Caption สำหรับ LinkedIn 3 โพสต์ ช่วงก่อน-ระหว่าง-หลัง THAIFEX
4. Script ประกาศเปิดบูธ (ภาษาอังกฤษ, 1 นาที)

โทนแบรนด์: Professional, Reliable, Premium Quality
```

### 6.3 ประกาศภายในและการสื่อสารพนักงาน

```
เขียนประกาศภายใน เรื่อง แนวทางปฏิบัติการใช้ AI ในที่ทำงาน (MRG AI Policy)

เนื้อหา:
- วัตถุประสงค์: ให้พนักงานใช้ AI เพิ่มประสิทธิภาพการทำงาน
- สิ่งที่ทำได้: ร่างเอกสาร วิเคราะห์ข้อมูล สรุปรายงาน
- สิ่งที่ห้ามทำ: ใส่ข้อมูลลูกค้าจริง, ข้อมูลราคา, ความลับทางการค้าลง AI
- แนวทางการตรวจสอบผลลัพธ์ก่อนใช้งาน
- ผู้รับผิดชอบดูแลนโยบาย

ใช้ภาษาไทย เข้าใจง่าย ไม่ยาวเกิน 1 หน้า A4
```

### 6.4 แปลเอกสาร

```
แปลเอกสารนี้จาก [ภาษาต้นฉบับ] เป็น [ภาษาปลายทาง]
โดยรักษาความหมายทางเทคนิคให้ถูกต้อง
(โดยเฉพาะศัพท์เฉพาะด้านอาหารทะเล เช่น Deveined, Butterfly Cut, HLSO, IQF)

เอกสาร: [วางข้อความที่ต้องการแปล]
```

---

## Module 7 — เชื่อมต่อ Google Drive / Canva

### 7.1 เชื่อมต่อ Google Drive

**ขั้นตอน:**
1. กดไอคอนปลั๊กอิน (🧩) ที่แถบด้านข้าง
2. เลือก **Google Drive** → กด Connect
3. Login ด้วย Google Account ของ MRG → กด **Allow**
4. สถานะเปลี่ยนเป็น **"Connected" สีเขียว**

```
เปิดไฟล์ Export_Report_June2026.xlsx จาก Google Drive
วิเคราะห์ยอดส่งออกของเดือนมิถุนายน
สินค้าไหนขายดีสุด ตลาดไหนเกินเป้า และตลาดไหนต้องระวัง
สรุปเป็นตารางเปรียบเทียบ
```

### 7.2 เชื่อมต่อ Canva

**ขั้นตอน:**
1. กดเมนู Connectors → เลือก **Canva** → Connect
2. Login ด้วย Canva Account → Allow
3. สถานะ "Connected"

```
สร้าง Product Catalog Slide บน Canva สำหรับส่งลูกค้าต่างประเทศ
สินค้า: Premium IQF White Shrimp รูปแบบต่างๆ
สี: น้ำเงิน-ขาว โทน Premium Seafood
ใส่: รูปสินค้า, Size, Pack Description, Certifications (ASC/BAP)
รูปแบบ: A4 Landscape สำหรับ PDF
```

### 7.3 ทำงานข้ามแพลตฟอร์ม

```
ช่วยทำงานนี้ให้หน่อย:
1. เปิดไฟล์ QC_Report_Q2.xlsx จาก Google Drive
2. วิเคราะห์ผลการตรวจคุณภาพ ว่าสายการผลิตไหนมีปัญหา
3. สร้าง Presentation บน Canva สรุปผล 5 สไลด์
4. สร้างไฟล์ Word รายงาน QC Summary สำหรับผู้บริหาร

ทำทั้งหมดเลยครับ
```

---

## Module 8 — ตั้งเวลาทำงานอัตโนมัติ

### 8.1 Scheduled Tasks คืออะไร

ตั้งเวลาให้ AI ทำงานซ้ำๆ อัตโนมัติ เหมาะกับงานรายงานประจำของ MRG

> ⚠️ **สำคัญ:** Claude Desktop ต้องเปิดค้างไว้เสมอ (ไม่ต้องเปิดหน้าจอ แค่เปิดแอป)

### 8.2 ตัวอย่าง Scheduled Tasks สำหรับ MRG

**ติดตามราคากุ้งโลกทุกเช้า:**
```
สร้าง Scheduled Task ชื่อ mrg-shrimp-price-morning
ให้ทำงานทุกเช้าวันจันทร์ถึงศุกร์ เวลา 7.30 น.

สิ่งที่ต้องทำ:
1. ค้นหาราคากุ้งขาวในตลาดโลกล่าสุด (USD/kg, ตลาด USA/EU)
2. ค้นหาข่าว Seafood Industry วันนี้ ที่เกี่ยวกับ Shrimp
3. ดูอัตราแลกเปลี่ยน USD/THB วันนี้
4. บันทึกเป็นไฟล์ Markdown ลงในโฟลเดอร์ daily-reports/
5. ส่งสรุปผ่าน Telegram (ดู Module 13)
```

**รายงานการผลิตสิ้นวัน:**
```
สร้าง Scheduled Task ชื่อ mrg-daily-production-summary
ทำงานทุกวัน เวลา 18.00 น.

สิ่งที่ต้องทำ:
1. เปิดไฟล์ production_today.xlsx ในโฟลเดอร์ Production-Data
2. วิเคราะห์ยอดผลิต ปริมาณ Yield QC Pass Rate ของวันนี้
3. เปรียบเทียบกับเป้าหมายรายวัน
4. สร้าง Daily Summary Report เป็น PDF
5. บันทึกลงโฟลเดอร์ Reports/Daily/
```

**สรุปข่าวตลาดส่งออกรายสัปดาห์:**
```
สร้าง Scheduled Task ชื่อ mrg-weekly-market-brief
ทำงานทุกวันศุกร์ เวลา 16.00 น.

สิ่งที่ต้องทำ:
1. ค้นหาข่าวตลาด Seafood และ Shrimp ประจำสัปดาห์
2. ติดตามความเคลื่อนไหวของคู่แข่งหลัก
3. สรุปกฎระเบียบหรือมาตรฐานใหม่ที่เกี่ยวข้อง
4. สร้างรายงาน Weekly Market Brief เป็น Word
5. บันทึกลงโฟลเดอร์ Reports/Weekly/
```

---

## Module 9 — สร้าง Web App และ Dashboard

### 9.1 Dashboard ติดตามการส่งออก

```
สร้าง Web App Dashboard ติดตามยอดส่งออก MRG
เป็นไฟล์ HTML ที่เปิดในเบราว์เซอร์ได้เลย

ฟีเจอร์:
- ช่องกรอกข้อมูลส่งออกรายวัน (วันที่, ตลาด, สินค้า, ปริมาณ kg, USD)
- กราฟแท่งยอดส่งออกรายตลาด (USA, EU, UK, Asia)
- กราฟเส้นแนวโน้มรายเดือน
- ตัวเลข KPI: ยอดรวม USD, ปริมาณรวม Ton, เฉลี่ย FOB/kg
- Dropdown กรองดูทีละตลาด
- สีโทนน้ำเงิน-ขาว สไตล์ MRG
- ข้อความภาษาไทย
```

### 9.2 เครื่องคำนวณต้นทุนการผลิต

```
สร้าง Web App เครื่องคำนวณต้นทุนสินค้ากุ้งแช่แข็ง
เป็นไฟล์ HTML

ฟีเจอร์:
- ใส่ราคาวัตถุดิบกุ้งสด (บาท/kg)
- ใส่ Yield % (เช่น 60% หลังปอกเปลือก)
- ใส่ค่าแรงต่อ kg
- ใส่ค่าบรรจุภัณฑ์ต่อ kg
- ใส่ค่า Freight / Cold Chain
- ใส่อัตราแลกเปลี่ยน USD/THB
- กดคำนวณ → แสดงต้นทุนรวม (บาท/kg และ USD/kg)
- แสดงราคาขาย FOB ที่ควรตั้ง ณ Margin ต่างๆ (20%, 25%, 30%)
- ปุ่ม Reset และ Export เป็น PDF
```

---

## Module 10 — Connectors

### 10.1 Connectors คืออะไร

ตัวเชื่อมที่ทำให้ AI เข้าถึงแอปและบริการภายนอกได้ เหมือนให้ AI มี "กุญแจ" เข้าไปทำงานในแอปต่างๆ

**Connectors ที่แนะนำให้ MRG เชื่อมต่อก่อน:**
1. Google Drive (ไฟล์รายงาน)
2. Gmail (อีเมลลูกค้า)
3. Google Calendar (ตารางงาน)
4. PDF + Word Plugin (เอกสาร)

### 10.2 Google Calendar

```
ช่วยดูตารางงานใน Google Calendar สัปดาห์นี้
สรุปเป็นตาราง: วัน เวลา หัวข้อ สถานที่
แล้วบอกด้วยว่าวันไหนว่าง เหมาะกับการนัด Video Call ลูกค้าต่างประเทศ
```

```
สร้างนัดหมายใน Google Calendar
หัวข้อ: MRG Customer Meeting — [ชื่อลูกค้า]
วันพุธนี้ เวลา 14.00-15.00 น. (ตาม Time Zone ลูกค้าด้วย)
รายละเอียด: หารือ Q3 Order Volume และ New Product Line
เพิ่มผู้เข้าร่วม: [อีเมลทีม Export]
```

### 10.3 PDF / Word / PowerPoint Plugin

**วิธีเชื่อมต่อ:** Connectors → เลือก Plugin → Connect → ใช้ได้เลย

**อ่านและสรุปสัญญา/เอกสาร:**
```
อ่านไฟล์ PDF ที่แนบมานี้ (Contract / COA / Lab Report)
สรุปประเด็นสำคัญ:
1. คู่สัญญา / ผู้ออกเอกสาร
2. ช่วงเวลา / วันที่มีผล
3. ข้อกำหนดหลักที่ต้องปฏิบัติตาม
4. ค่าปรับ / ข้อยกเว้น (ถ้ามี)
5. ข้อที่ควรให้ฝ่ายกฎหมายตรวจสอบ

สรุปเป็นภาษาไทย เข้าใจง่าย
```

### 10.4 Control Mac / Windows

**สิ่งที่ AI ทำได้:**
- เปิด/ปิดแอปพลิเคชัน
- จัดการไฟล์และโฟลเดอร์
- ค้นหาและเปิดเอกสาร
- รัน Script หรือ Batch Process

```
ช่วยจัดระเบียบโฟลเดอร์ Export Documents ให้หน่อย
1. ดูไฟล์ทั้งหมดในโฟลเดอร์นี้
2. สร้างโฟลเดอร์แยกตามปีและเดือน: 2026/01, 2026/02, ...
3. ย้ายไฟล์ตามวันที่ที่อยู่ในชื่อไฟล์
4. สรุปให้ว่าย้ายอะไรไปไหนบ้าง
```

> ⚠️ **ข้อควรระวัง:** ต้องนั่งดูจอตอน AI ทำงาน / เริ่มจากงานง่ายๆ ก่อน / ไม่ควรสั่งลบไฟล์โดยตรง

---

### 10.5 🆕 เชื่อมต่อ Telegram Bot — สำหรับ MRG

> แทนที่ LINE MCP เดิม → ใช้ **Telegram Bot** ซึ่งเหมาะกับทีมที่ใช้ Telegram สื่อสารกับลูกค้าต่างประเทศอยู่แล้ว

**สิ่งที่ AI ทำได้ผ่าน Telegram:**
- ส่งรายงานราคากุ้งประจำวันเข้า Group
- แจ้งเตือน Shipment Schedule
- ส่งสรุป QC Report
- Broadcast ข่าวสำคัญถึงทีม Export

---

**ขั้นตอนติดตั้ง Telegram Bot (8 ขั้น):**

**ขั้น 1: ติดตั้ง Node.js (เวอร์ชัน 20 ขึ้นไป)**
```bash
node --version   # ตรวจสอบ → ถ้าขึ้น v20.x.x ขึ้นไป = พร้อมใช้
```

**ขั้น 2: สร้าง Telegram Bot ผ่าน BotFather**
- เปิด Telegram → ค้นหา **@BotFather** → กด Start
- พิมพ์ `/newbot`
- ตั้งชื่อ Bot เช่น `MRG Export Assistant`
- ตั้ง Username เช่น `mrg_export_bot`
- Copy **Bot Token** ที่ได้ (รูปแบบ: `123456789:AAF...`)

**ขั้น 3: ดึง Chat ID ของตัวเอง (หรือ Group)**

วิธีที่ 1 — Chat ID ส่วนตัว:
- เปิด Telegram → ค้นหา **@userinfobot** → กด Start → จะเห็น `Id: 1234567890`

วิธีที่ 2 — Group Chat ID:
- เพิ่ม Bot เข้า Group ก่อน
- เปิดเบราว์เซอร์ → เข้า URL นี้ (แทน TOKEN ด้วย Bot Token):
```
https://api.telegram.org/bot{TOKEN}/getUpdates
```
- ดูค่า `"id"` ในส่วน `"chat"` → นำมาใช้เป็น Group Chat ID (มักขึ้นต้นด้วย `-`)

**ขั้น 4: ติดตั้ง Telegram MCP Server**
```bash
npm install -g @modelcontextprotocol/server-telegram
```

หรือใช้ npx โดยไม่ต้องติดตั้ง (แนะนำ):
```bash
npx @modelcontextprotocol/server-telegram --help
```

**ขั้น 5: แก้ไข Config ใน Claude Desktop**
- Claude Desktop → **Settings** → **Developer** → **Edit Config**
- เปิดไฟล์ `claude_desktop_config.json` → วาง config:

```json
{
  "mcpServers": {
    "telegram-bot": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-telegram"
      ],
      "env": {
        "TELEGRAM_BOT_TOKEN": "ใส่_Bot_Token_ที่ได้จาก_BotFather",
        "TELEGRAM_CHAT_ID": "ใส่_Chat_ID_ของคุณหรือ_Group"
      }
    }
  }
}
```

> ⚠️ **ถ้ามี MCP server อื่นอยู่แล้ว:** ให้เพิ่ม `"telegram-bot": {...}` เข้าไปข้างใน `mcpServers` อย่าทับ config เดิม

**ขั้น 6: Restart Claude Desktop**
- ปิดแอป → เปิดใหม่
- จะเห็นไอคอน 🔨 → กดดู → ควรเห็น Telegram tools

**ขั้น 7: ทดสอบส่งข้อความ Telegram**
```
ส่งข้อความ Telegram หาฉันว่า "สวัสดี MRG! Claude Cowork พร้อมทำงานแล้ว 🦐"
```

**ขั้น 8: ตั้ง Telegram Group สำหรับทีม (แนะนำ)**
- สร้าง Telegram Group ชื่อ `MRG AI Reports`
- เพิ่ม Bot เข้า Group
- เพิ่ม Chat ID ของ Group ใน config (แทน Chat ID ส่วนตัว)
- ทดสอบ Broadcast

**Tools ที่ได้:**

| Tool | ทำอะไร |
|------|--------|
| send_message | ส่งข้อความธรรมดาถึงคนหรือ Group |
| send_photo | ส่งรูปภาพ/กราฟ |
| send_document | ส่งไฟล์ PDF, Excel |
| get_updates | ดูข้อความที่รับมาใหม่ |
| get_chat | ดูข้อมูล Chat/Group |

> 💡 **Tip เด็ดสำหรับ MRG:** ใช้ Telegram Bot ร่วมกับ Scheduled Tasks — ตั้งเวลาสรุปราคากุ้งโลกทุกเช้า แล้วส่งเข้า Group ทีม Export อัตโนมัติ!

---

## Module 11 — Skills เฉพาะฝ่ายงาน MRG

### 11.1 Skills คืออะไร

**Skills** = ชุดคำสั่งที่สอน AI ทำงานเฉพาะทาง ครั้งเดียว ใช้ได้ตลอด

| | Prompt ธรรมดา | Skill |
|-|--------------|-------|
| การใช้งาน | อธิบายใหม่ทุกครั้ง | เรียกชื่อ Skill → ทำงานทันที |
| เปรียบเหมือน | สอนพนักงานใหม่ทุกวัน | พนักงาน MRG ที่ฝึกแล้ว รู้งานดี |

### 11.2 Skills สำเร็จรูป (ทำงานอัตโนมัติ)

PDF Skill, Word Skill, Excel Skill, PowerPoint Skill, Schedule Skill — ไม่ต้องสั่งเพิ่มเติม

### 11.3 Skills เฉพาะสำหรับ MRG — แนะนำสร้าง

**ฝ่าย Export & Sales:**
```
สร้าง Skill ชื่อ "export-toolkit"
สำหรับทีม Export ของ Marine Gold Products

เมื่อเรียกใช้ Skill นี้ ให้สามารถทำได้ 3 อย่าง:

1. "invoice" — สร้าง Commercial Invoice
   ถามข้อมูล: ชื่อลูกค้า, สินค้า/Spec, ปริมาณ, ราคา, Incoterms, Port
   สร้าง: ไฟล์ Word ภาษาอังกฤษ มาตรฐาน Export

2. "email-en" — ร่างอีเมลภาษาอังกฤษ
   ถามข้อมูล: ชื่อลูกค้า, ประเทศ, หัวข้ออีเมล, ประเด็นหลัก
   สร้าง: Email ภาษาอังกฤษ Professional B2B Seafood

3. "market-report" — สรุปรายงานตลาด
   ค้นหาข้อมูล: ราคากุ้ง ข่าว Seafood สถานการณ์คู่แข่ง
   สร้าง: Word Report สรุป 1-2 หน้า
```

**ฝ่าย QA / Production:**
```
สร้าง Skill ชื่อ "qa-toolkit"
สำหรับทีม QA ของ Marine Gold Products

เมื่อเรียกใช้ Skill นี้ ให้สามารถทำได้ 3 อย่าง:

1. "sop" — สร้าง SOP ฉบับใหม่
   ถามข้อมูล: หัวข้อ SOP, ขั้นตอนหลัก, ผู้รับผิดชอบ, เกณฑ์ตัดสิน
   สร้าง: ไฟล์ Word SOP มาตรฐาน มีเลขที่เอกสาร

2. "qc-summary" — สรุปผล QC จากไฟล์ Excel
   รับ: ไฟล์ Excel ข้อมูล QC
   สร้าง: รายงาน PDF สรุป Pass Rate, Trend, จุดที่ต้องแก้ไข

3. "nc-report" — สร้างรายงาน Non-Conformance
   ถามข้อมูล: Lot No., ปัญหาที่พบ, ผลกระทบ, มาตรการแก้ไข
   สร้าง: NC Report เป็น PDF พร้อมช่องลงนาม
```

**ฝ่าย HR / Training:**
```
สร้าง Skill ชื่อ "hr-toolkit"
สำหรับทีม HR ของ Marine Gold Products

รวม 3 ความสามารถ:
1. "job-post" — สร้างประกาศรับสมัครงาน (ไทย/อังกฤษ) สำหรับตำแหน่งต่างๆ
2. "training-report" — สรุปรายงาน Training Attendance และผลการประเมิน
3. "be-better-award" — ร่างคำประกาศ "Be Better Award" ประจำเดือน
```

**ฝ่าย Marketing / Business Dev:**
```
สร้าง Skill ชื่อ "marketing-toolkit"
สำหรับทีม Marketing ของ Marine Gold Products

รวม 3 ความสามารถ:
1. "product-brief" — เขียน Product Description (ไทย+อังกฤษ) สำหรับสินค้าใหม่
2. "competitor-scan" — Research คู่แข่งในตลาดที่ระบุ สรุปเป็นตาราง
3. "exhibition-content" — สร้าง Content ชุดสำหรับงาน Trade Show
```

---

## Module 12 — Personal Plugins สำหรับทีมงาน

### 12.1 Plugins คืออะไร

**Plugins = กล่องเครื่องมือครบเซ็ต** รวม Connectors + Skills + Tools ไว้ด้วยกัน

### 12.2 ขั้นตอนสร้าง Plugin

**ขั้น 1: สั่ง AI สร้าง Plugin**
```
สร้าง Plugin ใหม่ชื่อ "mrg-export-agent"
สำหรับทีม Export ของ Marine Gold Products

รวม Skills:
1. Skill "export-toolkit" — เอกสาร Export ครบชุด
2. Skill "market-daily-brief" — สรุปราคากุ้งโลก
3. Skill "customer-email-en" — อีเมลลูกค้าต่างประเทศ
4. Skill "shipment-tracker" — ติดตามสถานะการจัดส่ง

Connectors ที่ใช้: Google Drive, Gmail, Telegram Bot
```

**ขั้น 2: ทดสอบทุก Skill**

**ขั้น 3: Export แล้วแชร์ทีม**
```
Export Plugin mrg-export-agent เป็นไฟล์ .plugin ให้ผมหน่อย
เพื่อแชร์ให้ทีม Export ทุกคนติดตั้งใช้งาน
```

**วิธีทีมติดตั้ง Plugin:**
- ลากไฟล์ .plugin วางในช่อง Chat → พิมพ์ "ติดตั้ง Plugin นี้" → ใช้งานได้ทันที

---

## Module 13 — สั่งงาน Cowork ผ่าน Telegram

### ภาพรวม 3 วิธี

| วิธี | ความง่าย | ความเร็ว | เหมาะกับ |
|------|---------|---------|---------|
| วิธีที่ 1: Cowork โดยตรง | ⭐⭐⭐⭐⭐ | แจ้งทันที | งานทุกประเภท |
| วิธีที่ 2: Gmail | ⭐⭐⭐⭐⭐ | เช็ควันละครั้ง | งานไม่เร่ง |
| วิธีที่ 3: Telegram Webhook | ⭐⭐⭐ (ตั้งค่าหน่อย) | ทุก 3 ชม. | แชทสั่งสะดวก อัตโนมัติ |

**โครงสร้างที่เหมือนกันทุกวิธี:**
```
คุณ (สั่งงาน) → Cowork Agent (ทำงาน) → Telegram ของคุณ/ทีม (รับผลลัพธ์)
```

### วิธีที่ 1 — Cowork โดยตรง (ง่ายที่สุด ⭐)

ต้องการเพียง Telegram Bot (Module 10.5) แล้วเพิ่มประโยคต่อท้าย:

```
[คำสั่งงานปกติ]
...ทำเสร็จแล้วส่งสรุปผลไปที่ Telegram Group MRG Export Team ด้วย
```

**ตัวอย่างสำหรับ MRG:**
```
วิเคราะห์ไฟล์ shrimp_price_data.xlsx ที่แนบมา
สรุปราคากุ้งขาวตลาดสหรัฐ เปรียบเทียบ Q1 vs Q2
ทำเสร็จแล้วส่งสรุปผลเป็นข้อความ Telegram ไปที่ MRG Export Team ด้วย
```

### วิธีที่ 2 — Gmail

**ขั้นตอน:**

1. สร้าง Skill ใน Cowork:
```
สร้าง skill เช็ค Gmail ทุกเช้า
ถ้ามีอีเมลที่มีคำว่า "MRG-Task:" ให้ทำงานตามสั่ง
แล้วส่งผลลัพธ์กลับทาง Telegram Group
```

2. ตั้ง Schedule:
```
ตั้ง Schedule เช็ค Gmail ทุกเช้า 8 โมง
ถ้ามีอีเมลที่มี "MRG-Task:" ให้ทำงานแล้วส่งผล Telegram
```

3. วิธีส่งอีเมลสั่งงาน (จากมือถือ):
```
To: ตัวเอง@gmail.com
Subject: MRG-Task: สรุปราคากุ้งโลกวันนี้และส่ง Telegram
Body: ค้นหาราคากุ้งขาวในตลาดสหรัฐและ EU วันนี้
```

### วิธีที่ 3 — Telegram Webhook (อัตโนมัติสูงสุด 🔥)

**Architecture:**
```
พิมพ์ใน Telegram → Webhook → Apps Script → Google Sheet → Cowork ดึงงาน → ทำ → ส่ง Telegram
```

**ขั้นตอน:**

**1. สร้าง Google Sheet** ชื่อ "MRG Cowork Tasks"
- Header: `timestamp, userId, displayName, message, status`

**2. เขียน Google Apps Script (Webhook + API):**

```javascript
var BOT_TOKEN = 'ใส่_Bot_Token_ที่ได้จาก_BotFather';
var ALLOWED_USER_IDS = ['ใส่_userId_ที่อนุญาต']; // กรองเฉพาะทีม MRG

// รับข้อความจาก Telegram
function doPost(e) {
  try {
    var json = JSON.parse(e.postData.contents);
    var message = json.message;
    if (!message) return ok();

    var userId = String(message.from.id);
    var text = message.text || '';

    // กรองเฉพาะผู้ใช้ที่อนุญาต
    if (!ALLOWED_USER_IDS.includes(userId)) {
      sendTelegram(userId, '❌ คุณไม่มีสิทธิ์ใช้งาน MRG Cowork Bot');
      return ok();
    }

    // บันทึกลง Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getRange('A1').getValue() === '') {
      sheet.getRange('A1:E1').setValues([['timestamp','userId','displayName','message','status']]);
    }
    var timestamp = new Date().toLocaleString('th-TH', {timeZone: 'Asia/Bangkok'});
    var displayName = (message.from.first_name || '') + ' ' + (message.from.last_name || '');
    sheet.appendRow([timestamp, userId, displayName.trim(), text, 'pending']);

    // ตอบกลับยืนยัน
    sendTelegram(userId, '✅ รับงานแล้ว: ' + text + '\nClaude Cowork จะดำเนินการและส่งผลกลับมา');
    return ok();
  } catch (err) {
    return ok();
  }
}

// API สำหรับ Cowork ดึงงาน
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var pending = [];
  for (var i = 1; i < data.length; i++) {
    if (data[i][4] === 'pending') {
      pending.push({
        row: i + 1,
        timestamp: String(data[i][0]),
        userId: String(data[i][1]),
        displayName: String(data[i][2]),
        message: String(data[i][3])
      });
      sheet.getRange(i + 1, 5).setValue('done');
    }
  }
  return ContentService.createTextOutput(
    JSON.stringify({status:'ok', count: pending.length, tasks: pending})
  ).setMimeType(ContentService.MimeType.JSON);
}

// ส่งข้อความ Telegram
function sendTelegram(chatId, text) {
  UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({chat_id: chatId, text: text, parse_mode: 'HTML'})
  });
}

function ok() {
  return ContentService.createTextOutput('ok');
}
```

**3. Deploy เป็น Web App:**
- Deploy → New Deployment → Type: เว็บแอป
- ดำเนินการเป็น: **ฉัน** | ใครเข้าถึง: **ทุกคน** ← สำคัญ
- Copy URL ที่ได้

**4. ตั้ง Webhook URL ใน Telegram:**
- เปิดเบราว์เซอร์ → ไปที่ URL นี้ (แทน TOKEN และ WEBHOOK_URL):
```
https://api.telegram.org/bot{TOKEN}/setWebhook?url={WEBHOOK_URL}
```
- ถ้าได้ `{"ok":true,"result":true}` = สำเร็จ

**5. ตั้ง Schedule ใน Cowork:**
```
ตั้ง Schedule เช็คคำสั่งจาก Telegram ทุก 3 ชั่วโมง
ใช้ WebFetch เรียก Apps Script URL เพื่อดึง pending tasks
ถ้ามีงาน ให้ทำตามคำสั่ง แล้วส่งผลกลับ Telegram
```

---

## Module 14 — Claude Dispatch 🆕

**เปิดตัว:** กุมภาพันธ์ 2026 (Claude Labs)

### 14.1 Claude Dispatch คืออะไร

มือถือกลายเป็น **"รีโมทคอนโทรล"** สั่งงาน Claude Cowork จากที่ไหนก็ได้

```
📱 มือถือ (สั่งงาน) → QR Pair → 🖥️ Desktop (ทำงานจริง) → ✅ ส่งผลกลับมือถือ
```

**เหมาะมากสำหรับ MRG เพราะ:**
- ผู้จัดการ Export สั่งดึงข้อมูลราคากุ้งขณะอยู่ในที่ประชุม
- ทีม QA เช็คผล Lab Report จากโรงงาน
- ผู้บริหารดูรายงานยอดส่งออกขณะเดินทาง

### 14.2 วิธีใช้งาน

1. เปิด Claude Desktop บนเครื่อง (ต้องเปิดค้างไว้)
2. เปิด Claude App บนมือถือ → เมนู **Dispatch** (ใน Claude Labs)
3. Scan QR Code จาก Claude Desktop
4. พิมพ์สั่งงานจากมือถือ!

**Prompt ที่ใช้ได้ดีจากมือถือ:**
```
ค้นหาราคากุ้งขาวในตลาด USA และ EU วันนี้
สรุปสั้นๆ เปรียบเทียบกับสัปดาห์ที่แล้ว
```

```
เปิดไฟล์ Export_Q2_2026.xlsx จากโฟลเดอร์ Reports
สรุปยอดส่งออกรวม Top 3 ตลาด
```

### 14.3 เทคนิคสั่งงานให้เสถียร

✅ เสถียร — สั่งแบบนี้:
```
ค้นหาราคากุ้งขาว Size 26/30 ในตลาด USA วันนี้ สรุปเป็นตาราง
```

⚠️ อาจไม่เสถียร — หลีกเลี่ยง:
```
เปิด Chrome ไปเว็บ X → ดึงราคา → เปิด Excel → บันทึก → ส่งอีเมล → แจ้ง Telegram
```

---

## Module 15 — Projects จัดการงานเป็นระบบ 🆕

**เปิดตัว:** 20 มีนาคม 2026

### 15.1 Projects คืออะไร

เปลี่ยน Claude Desktop จาก one-off chats → **Structured Workspace** สำหรับงานต่อเนื่อง

### 15.2 ฟีเจอร์ใหม่ 6 อย่าง

1. **Workspace แยกตามงาน/ฝ่าย** — รวมงานที่เกี่ยวข้องไว้ด้วยกัน
2. **Memory แบบ Project-scoped** — จำบริบทข้าม task ในโปรเจกต์เดียวกัน
3. **Instructions เฉพาะ Project** — กำหนด tone, format, ภาษา, กฎเฉพาะ
4. **Scheduled Tasks ผูกกับ Project** — ทำงานซ้ำๆ ใน scope ของ project
5. **Import จาก Claude Chat Projects** — ดึง files + instructions มาได้
6. **แยก Context Folder กับ Output Folder** — เหมาะสำหรับทีม

### 15.3 วิธีสร้าง Project

1. กดปุ่ม **+** ที่หัวข้อ Projects ในแถบด้านซ้าย
2. ตั้งชื่อ + เลือก Context Folder + Output Folder
3. เขียน **Instructions เฉพาะ Project** (ภาษา, format, ข้อจำกัด)
4. คลิก **"Work in a project"** → เลือก Project → สั่งงานได้เลย

### 15.4 ตัวอย่าง Projects สำหรับ MRG

```
📂 Project: USA Export
   📁 Context: ข้อมูลลูกค้า USA, Spec สินค้า, Price List
   📁 Output: เอกสาร Invoice, Email, Reports
   📋 Instructions: ภาษาอังกฤษ Professional, Incoterms FOB, Currency USD
   🧠 Memory: จำชื่อ Buyer, Port of Discharge, Product Preferences

📂 Project: QA & Production
   📁 Context: มาตรฐาน QC, SOP เดิม, เกณฑ์การตรวจ
   📁 Output: Reports, NC Forms, SOP ฉบับใหม่
   📋 Instructions: ภาษาไทย เป็นทางการ ใช้ศัพท์มาตรฐาน GMP/HACCP
   🧠 Memory: จำเกณฑ์ Spec สินค้าแต่ละประเภท

📂 Project: Market Intelligence
   📋 Instructions: สรุปกระชับ ใช้ข้อมูลล่าสุดจาก Web Search
   📁 Output: Weekly/Monthly Reports
   ⏰ Scheduled: ทุกวันจันทร์ 08.00 น. สรุปข่าวตลาดสัปดาห์
   🧠 Memory: จำข่าวที่เคยสรุปแล้ว ไม่สรุปซ้ำ

📂 Project: Be Better Awards
   📋 Instructions: โทนอบอุ่น เป็นกันเอง ยกย่องผลงาน
   📁 Output: ประกาศรางวัล Certificates
   🧠 Memory: จำรายชื่อผู้ชนะเดือนที่ผ่านมา
```

### 15.5 Prompt ตัวอย่างในแต่ละ Project

**ใน Project: USA Export**
```
สร้าง Commercial Invoice สำหรับ Sunshine Foods Inc.
Order: 1 FCL White Shrimp HLSO 26/30 IQF, น้ำหนัก 18,000 kg
ราคา 4.85 USD/kg FOB Laem Chabang
Shipment: 20 July 2026
ใช้ข้อมูลลูกค้าและ Template ที่มีอยู่ใน Context ของ Project นี้
```

**ใน Project: QA & Production**
```
สร้าง Non-Conformance Report สำหรับ Lot No. MRG-2026-0715
ปัญหาที่พบ: Black Spot 3 จุดใน 1 กล่องตัวอย่าง
ใช้ Format NC Report มาตรฐานของ MRG
```

### 15.6 ⚠️ ข้อจำกัดที่ควรรู้

- เก็บข้อมูลใน Local เท่านั้น (ยังไม่มี Cloud Sync)
- ยังไม่รองรับ Project Sharing สำหรับ Team/Enterprise
- Desktop ต้องเปิดค้างไว้สำหรับ Scheduled Tasks

---

## 🆕 เนื้อหาเพิ่มเติม — อัปเดตล่าสุด 2026

### 🆕 A. Claude Plans — เลือก Plan ให้เหมาะกับ MRG

| Plan | ราคา | Cowork | Projects | Dispatch |
|------|------|--------|----------|----------|
| Pro | $20/เดือน | ✅ | ✅ | ⚠️ กำลังเปิด |
| Max 5x | $100/เดือน | ✅ | ✅ | ✅ |
| Max 20x | $200/เดือน | ✅ | ✅ | ✅ |
| Team | $30/คน/เดือน | ✅ | ✅ | ✅ |

**แนะนำสำหรับ MRG:**
- พนักงานทั่วไป / ฝ่ายสนับสนุน → **Pro**
- ทีม Export, QA, Marketing ที่ใช้งานหนัก → **Max 5x**
- ระดับผู้จัดการขึ้นไป → **Max 5x** หรือ **Team**

### 🆕 B. Claude Models ที่ควรรู้

| Model | ใช้ทำอะไร | Speed | ความฉลาด |
|-------|----------|-------|---------|
| claude-haiku-4-5 | งานง่าย เร็ว ประหยัด | ⚡⚡⚡ | ⭐⭐ |
| claude-sonnet-4-6 | งานทั่วไป (ค่าเริ่มต้น Cowork) | ⚡⚡ | ⭐⭐⭐⭐ |
| claude-opus-4-x | วิเคราะห์ซับซ้อน, Research เชิงลึก | ⚡ | ⭐⭐⭐⭐⭐ |

### 🆕 C. ข้อควรระวังด้านความปลอดภัยข้อมูล (สำคัญมากสำหรับ MRG)

> ⚠️ **นโยบาย MRG AI Data Security**

**สิ่งที่ห้ามใส่ใน AI:**
- ราคาขายและ Margin จริง
- ชื่อ-รายละเอียดลูกค้าจริงในระบบ Production
- ข้อมูลสูตรการผลิตและ Know-how
- เอกสารสัญญาฉบับจริงที่ยังไม่หมดอายุ

**แนวทางปลอดภัย:**
- ใช้ข้อมูลตัวอย่าง/ข้อมูล Dummy เมื่อ Test
- ใช้ชื่อสมมติแทนชื่อลูกค้าจริง
- ปิดการแชร์ข้อมูลเพื่อ Train Model (Settings → Privacy)
- หากต้องใช้ข้อมูลจริง: ใช้ Claude Desktop เท่านั้น ไม่ใช้เว็บ

### 🆕 D. Prompt Engineering สำหรับบริบท MRG

**เทคนิค 1: ระบุตลาดและมาตรฐานที่ใช้**
```
[งาน] ... สำหรับตลาด USA มาตรฐาน FDA/USDA ใช้หน่วย lbs ราคา USD
หรือ
[งาน] ... สำหรับตลาด EU มาตรฐาน EC 853/2004 ใช้หน่วย kg ราคา EUR
```

**เทคนิค 2: ระบุภาษาและโทนให้ชัดเจน**
```
ภาษาอังกฤษ → โทน Professional B2B Seafood Export
ภาษาไทย → โทนทางการ เหมาะกับองค์กร
```

**เทคนิค 3: ให้ Context ด้าน Product Spec**
```
สินค้า: White Shrimp (Litopenaeus vannamei)
- HLSO = Head Less Shell On
- PD = Peeled Deveined
- PUD = Peeled Un-Deveined
- IQF = Individually Quick Frozen
- BF = Block Frozen
```

**เทคนิค 4: Few-shot สำหรับ Invoice**
```
ใช้รูปแบบ Invoice แบบนี้เป็นตัวอย่าง:
[แนบตัวอย่าง Invoice ที่เคยใช้]
สร้าง Invoice ใหม่สำหรับ [ลูกค้า/Order ใหม่]
```

### 🆕 E. MCP (Model Context Protocol) — พื้นฐาน

MCP คือโปรโตคอลที่ให้ Claude เชื่อมต่อกับเครื่องมือภายนอกได้

**โครงสร้าง claude_desktop_config.json สำหรับ MRG:**
```json
{
  "mcpServers": {
    "telegram-bot": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-telegram"],
      "env": {
        "TELEGRAM_BOT_TOKEN": "ใส่_token",
        "TELEGRAM_CHAT_ID": "ใส่_chat_id"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/mrg-workspace"]
    }
  }
}
```

### 🆕 F. Best Practices สำหรับ MRG

**Do's ✅**
1. เปิดโฟลเดอร์ MRG Workspace ที่ถูกต้องก่อนเริ่ม Cowork
2. ตั้ง Project แยกตามฝ่ายและตลาดลูกค้า
3. สร้าง Skills สำหรับงาน Export ที่ทำซ้ำทุกสัปดาห์
4. ตรวจสอบตัวเลขและชื่อสินค้าทุกครั้งก่อนส่งลูกค้า
5. บันทึก Prompt ที่ดีไว้ใน Skills เพื่อแชร์ทีม

**Don'ts ❌**
1. อย่าใส่ราคาขายจริง/Margin จริงลงใน AI
2. อย่าส่งเอกสารสัญญาลูกค้าจริงให้ AI ประมวลผล (ใช้ข้อมูล Dummy แทน)
3. อย่าปิด Claude Desktop ขณะ Scheduled Task กำลังทำงาน
4. อย่าเชื่อผลลัพธ์ 100% — ตรวจสอบ Spec, ตัวเลข, ชื่อก่อนใช้เสมอ
5. อย่าสั่งงานที่ซับซ้อนเกินไปในครั้งเดียว — แบ่งเป็นขั้นตอนย่อย

---

## 📅 แผนการอบรม 4 สัปดาห์สำหรับ MRG

### สัปดาห์ 1 — รู้จักและลงมือ (ระดับง่าย)

| วัน | หัวข้อ | Workshop |
|-----|--------|---------|
| จันทร์ | ติดตั้ง Claude Desktop + สมัคร Pro + แนะนำตัวให้ AI | ตั้งค่าเครื่องของตัวเอง |
| อังคาร | สร้างเอกสาร Word: SOP, Memo, Invoice Template | สร้าง Template ที่ใช้จริง |
| พุธ | สร้าง Excel: รายงานยอดผลิต ยอดส่งออก | วิเคราะห์ไฟล์ข้อมูลของตัวเอง |
| พฤหัสบดี | Research ตลาดกุ้งโลก + สรุปรายงาน | ค้นหาข้อมูลตลาดจริง |
| ศุกร์ | เขียน Email ภาษาอังกฤษ + แปลเอกสาร | เขียนอีเมลลูกค้าจริง (Data Dummy) |

### สัปดาห์ 2 — เชื่อมต่อและขยาย (ระดับกลาง)

| วัน | หัวข้อ | Workshop |
|-----|--------|---------|
| จันทร์ | เชื่อม Google Drive + Gmail | ดึงไฟล์จาก Drive มาวิเคราะห์ |
| อังคาร | เชื่อม Google Calendar + PDF Plugin | อ่านสัญญา PDF สร้างนัดประชุม |
| พุธ | สร้าง Dashboard HTML ติดตามการผลิต/ส่งออก | Dashboard จากข้อมูล MRG จริง |
| พฤหัสบดี | งานข้ามแพลตฟอร์ม: Drive → วิเคราะห์ → Canva | ทำ Catalog สินค้า |
| ศุกร์ | Workshop ฝ่ายงาน: ฝึกใช้ตามบทบาทจริง | แต่ละฝ่ายทำงานของตัวเอง |

### สัปดาห์ 3 — Automation (ระดับสูง)

| วัน | หัวข้อ | Workshop |
|-----|--------|---------|
| จันทร์ | Scheduled Tasks: รายงานราคากุ้งทุกเช้า | ตั้ง Task จริง |
| อังคาร | ติดตั้ง Telegram Bot | ทดสอบส่งข้อความ |
| พุธ | สร้าง Skills ฝ่ายงานตัวเอง | สร้าง Skill ที่ใช้งานจริง |
| พฤหัสบดี | Telegram Webhook + Google Apps Script | ตั้งระบบส่งงานผ่าน Telegram |
| ศุกร์ | ทดสอบระบบ End-to-End ครบกระบวนการ | Hackathon ทีม |

### สัปดาห์ 4 — Advanced + ใช้งานจริง

| วัน | หัวข้อ | Workshop |
|-----|--------|---------|
| จันทร์ | Projects: ตั้ง Project แต่ละฝ่าย | สร้าง Project จริงของแต่ละคน |
| อังคาร | Claude Dispatch: สั่งงานจากมือถือ | ทดสอบสั่งงานนอกสถานที่ |
| พุธ | สร้าง Plugin แชร์ทีม | Plugin สำหรับทีม Export |
| พฤหัสบดี | ทบทวนทุก Module + Q&A | แก้ปัญหา Use Case จริง |
| ศุกร์ | **นำเสนอผลงาน** — Be Better AI Award | แต่ละทีมนำเสนอว่าใช้ AI ช่วยงานอะไร |

> 🏆 **Be Better AI Award:** รางวัลสำหรับพนักงาน MRG ที่ใช้ AI พัฒนางานได้โดดเด่นที่สุด สอดคล้องกับปรัชญา "Be Better" ขององค์กร

---

## 📊 สรุปการใช้งาน Claude Cowork สำหรับ MRG

| ฝ่าย | งานที่ AI ช่วยได้ | Priority |
|------|----------------|---------|
| **Export** | Invoice, Email EN, Market Report | 🔴 สูงสุด |
| **QA/Production** | SOP, QC Report, NC Form | 🔴 สูงสุด |
| **HR/Training** | Job Post, Training Report, Be Better Award | 🟡 กลาง |
| **Marketing** | Product Content, Competitor Research | 🟡 กลาง |
| **Logistics** | Shipment Summary, Cost Analysis | 🟢 ปกติ |
| **บัญชี/การเงิน** | Budget Excel, Expense Report | 🟢 ปกติ |

---

*จัดทำโดย: ปรับจากหลักสูตร AI Cowork Agent v2 (ajkengai.com) + วิเคราะห์บริบทบริษัท Marine Gold Products Ltd. (mrgshrimp.com)*
*อัปเดต: กรกฎาคม 2026 | เวอร์ชัน: MRG Edition*
*เปลี่ยน LINE MCP → Telegram Bot | ตัดส่วน Perplexity & Manus ออก*
