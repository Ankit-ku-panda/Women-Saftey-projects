
---

## 🚀 How to Run the Projects

### 🔹 Arduino-Based Projects
1. Open `.ino` file in **Arduino IDE**
2. Select:
   - Board → Arduino Uno
   - Correct COM Port
3. Install required libraries (mentioned below)
4. Upload code
5. Open Serial Monitor if required

---

### 🔹 Web-Based Projects
1. Open project folder
2. Double-click `index.html`
3. Or run using **Live Server**
4. Allow location permissions if asked

---

## ⚠️ Common Errors & Fixable Solutions (IMPORTANT)

### ❌ 1. Arduino Code Not Uploading
**Error:**  
`COM port not found` or `avrdude error`

✅ **Fix:**
- Select correct board & port
- Reconnect USB cable
- Install Arduino drivers

---

### ❌ 2. Missing Arduino Libraries
**Error:**  
`No such file or directory`

✅ **Fix:**
- Go to **Sketch → Include Library → Manage Libraries**
- Install required libraries like:
  - `TinyGPS++`
  - `Adafruit SSD1306`
  - `SoftwareSerial`

---

### ❌ 3. GSM Module Not Sending SMS
**Cause:**
- Insufficient power
- Wrong baud rate
- SIM card issue

✅ **Fix:**
- Use external power supply
- Check SIM balance
- Match baud rate in code

---

### ❌ 4. GPS Location Not Updating
**Cause:**
- GPS needs open sky
- Incorrect wiring

✅ **Fix:**
- Test outdoors
- Wait 2–5 minutes for lock
- Recheck TX/RX pins

---

### ❌ 5. Web Project Not Showing Location
**Error:**  
Location not detected

✅ **Fix:**
- Allow browser location permission
- Use HTTPS or localhost
- Enable GPS on device

---

### ❌ 6. JavaScript Not Working
**Cause:**
- Script not linked
- Console errors

✅ **Fix:**
- Check `<script src="script.js"></script>`
- Open browser console (F12)
- Fix syntax errors

---

## 🧪 Safety Logic Used in Projects

Typical safety flow:
1. User presses SOS button / sensor triggers
2. System collects GPS location
3. Alert message generated
4. Sent via SMS / web alert
5. Trusted contact receives emergency info

---

## 💡 Possible Enhancements

- Add mobile app integration 📱
- Add voice command SOS 🎤
- Add camera & image capture 📷
- Use cloud database for logs ☁️
- Add AI threat detection 🤖

---

## 🤝 Contribution Guidelines

Want to improve women safety tech?

1. Fork the repository
2. Add a new project folder
3. Include proper README
4. Test code thoroughly
5. Create a Pull Request

---

Embedded Systems • Web Development • Safety Tech Enthusiast  

> Building projects that combine technology with real-world impact.

---

⭐ If this repository helped you, consider **starring it**!
