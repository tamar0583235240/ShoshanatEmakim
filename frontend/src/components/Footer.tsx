const Footer = () => {
  return (
    <footer>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px"}}>
        {/* Column 1 */}
        <div>
          <h3>שירותים</h3>
          <ul>
            <li><a href="#">זרי פרחים</a></li>
            <li><a href="#">סידורי שולחן</a></li>
            <li><a href="#">עיצובים מיוחדים</a></li>
            <li><a href="#">אירועים</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3>מידע</h3>
          <ul>
            <li><a href="#">אודותינו</a></li>
            <li><a href="#">תנאי שימוש</a></li>
            <li><a href="#">מדיניות פרטיות</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3>עקבו אחרינו</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3>יצירת קשר</h3>
          <p>טלפון: 03-1234567</p>
          <p>דוא"ל: info@example.com</p>
          <p>כתובת: רחוב הדוגמה 12, תל אביב</p>
        </div>
      </div>

      <div>
        &copy; {new Date().getFullYear()} כל הזכויות שמורות. שושנת העמקים
      </div>
      <a href="https://www.example.com" className="text-white hover:underline">Web Development</a>
    </footer>
  );
};

export default Footer;