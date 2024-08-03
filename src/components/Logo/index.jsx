import './Logo.css';


const Logo = (props) => {
  return (
    <div
      className="logo"
      style={{
        '--logo-size': props.size,
        '--cone-border-radius': `calc(${props.size} / 1.5)`, // Dynamically calculated
      }}
    >
      <div className="cone"></div>
      <div className="cone twist85"></div>
      <div className="cone twist-90"></div>
      <div className="cone twist-180"></div>
    </div>
  );
}

export default Logo;
