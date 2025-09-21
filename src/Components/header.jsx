function Header() {
  return (
    
     <header className="nav">
            <a href="#" className="logo">M<span>v</span></a>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
        </label>
            <ul className="list">
              {
                ["Home","About","My Skills","Resume","Contact"].map((item)=><li key={item}><a href={"#"+item.toLowerCase()}>{item}</a></li>)
              }
            </ul>
            
          </header>
  );
}
export default Header;