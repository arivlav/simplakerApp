import style from './Footer.module.css';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className={`${style.footer}`}>
      <p>&copy;Simplaker, { getYear() }</p> 
    </div>
  );
  }
  
export default Footer;