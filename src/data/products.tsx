export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Beats Studio2 Wireless Headphones (Matte Black)",
    price: 249.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.-cECvZRIqUv74lLPZpVDAQHaJC&pid=Api", 
    description: "หูฟังไร้สาย Beats Studio2 สีดำด้าน พร้อม ANC",
  },
  {
    id: 2,
    name: "Beats Studio2 Wireless Headphones (White)",
    price: 249.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7P3_LciC9XmMvZXGwO7COgHaFA&pid=Api", 
    description: "หูฟังสีขาวสุดหรู พร้อมคุณภาพเสียง Beats",
  },
  {
    id: 3,
    name: "Beats Studio2 Wireless Headphones (Blue)",
    price: 249.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.acgTnkyfCkFngBCHr5dIPAHaHa&pid=Api", 
    description: "หูฟังสีฟ้าตัวแรง พร้อมประสิทธิภาพ ANC",
  },
  {
    id: 4,
    name: "Beats Studio2 Wireless Headphones (Red)",
    price: 249.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.t4EfBP1Z6PnTjHFX94gP-gHaHa&pid=Api", 
    description: "หูฟังสีแดงสด ให้ความเป็นเอกลักษณ์",
  },
  {
    id: 5,
    name: "Skullcandy Hesh 2 Wireless Headphones",
    price: 99.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.t4EfBP1Z6PnTjHFX94gP-gHaHa&pid=Api", 
    description: "หูฟัง Skullcandy Hesh 2 จัดเต็มเสียงเบส",
  },
  {
    id: 6,
    name: "Sony WH‑CH520 Wireless Headphones",
    price: 59.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.-cECvZRIqUv74lLPZpVDAQHaJC&pid=Api", 
    description: "หูฟัง Sony น้ำหนักเบา แบต 50 ชั่วโมง",
  },
  {
    id: 7,
    name: "Sony RF995RK RF Wireless Headphones",
    price: 129.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.acgTnkyfCkFngBCHr5dIPAHaHa&pid=Api", 
    description: "หูฟังไร้สาย RF จาก Sony ระยะไกล 150 ฟุต",
  },
  {
    id: 8,
    name: "Beats Studio Pro Wireless Headphones",
    price: 469.95,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.t4EfBP1Z6PnTjHFX94gP-gHaHa&pid=Api", 
    description: "หูฟัง Beats Studio Pro พร้อม ANC, Spatial Audio",
  },
  {
    id: 9,
    name: "Budget True Wireless Earbuds (TOZO T6 style)",
    price: 29.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.acgTnkyfCkFngBCHr5dIPAHaHa&pid=Api", 
    description: "หูฟัง True‑Wireless สุดคุ้ม TOZO T6 สไตล์",
  },
  {
    id: 10,
    name: "Sennheiser RS 175 Wireless Headphones",
    price: 149.99,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.acgTnkyfCkFngBCHr5dIPAHaHa&pid=Api", 
    description: "หูฟังไร้สาย Sennheiser RS 175 พร้อมฐานชาร์จ",
  },
  {
    id: 11,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 99.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample0&pid=Api",
    description: "เมาส์ไร้สายยอดนิยม พร้อมปุ่มปรับสปีดและ scroll ที่ลื่น",
  },
  {
    id: 12,
    name: "JBL Flip 6 Bluetooth Speaker",
    price: 119.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample1&pid=Api",
    description: "ลำโพงพกพากันน้ำ เสียงกระหึ่ม รุ่น Flip 6",
  },
  {
    id: 13,
    name: "Keychron K6 Mechanical Keyboard",
    price: 79.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample2&pid=Api",
    description: "คีย์บอร์ด Mechanical ขนาด 65% พร้อม RGB",
  },
  {
    id: 14,
    name: "Anker 767 Power Bank (20000mAh)",
    price: 49.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample3&pid=Api",
    description: "เพาเวอร์แบงค์ชาร์จเร็ว 100W รองรับ PD",
  },
  {
    id: 15,
    name: "Fitbit Versa 4 Smartwatch",
    price: 199.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample4&pid=Api",
    description: "สมาร์ทวอชตรวจวัดกิจกรรมและการนอน",
  },
  {
    id: 16,
    name: "DJI Mini 3 Pro Drone",
    price: 699.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample5&pid=Api",
    description: "โดรนขนาดกะทัดรัด ถ่ายวิดีโอ 4K ฟีเจอร์ครบ",
  },
  {
    id: 17,
    name: "Meta Quest 2 VR Headset",
    price: 299.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample6&pid=Api",
    description: "แว่น VR แบบ standalone เล่นเกมสบาย",
  },
  {
    id: 18,
    name: "Canon EOS R10 Mirrorless Camera",
    price: 999.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample7&pid=Api",
    description: "กล้องไร้กระจกความละเอียดสูง เหมาะสาย Vlog",
  },
  {
    id: 19,
    name: "HAVIT RGB Laptop Cooling Pad",
    price: 29.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample8&pid=Api",
    description: "แผ่นรองโน้ตบุ๊กมีพัดลมและไฟ RGB",
  },
  {
    id: 20,
    name: "UGREEN USB-C Multifunction Hub",
    price: 59.99,
    image: "https://tse1.mm.bing.net/th?id=OIP.sample9&pid=Api",
    description: "Hub USB-C พร้อม HDMI, USB-A และ PD Passthrough",
  },
];
