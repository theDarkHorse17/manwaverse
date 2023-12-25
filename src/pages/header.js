import img1 from '/manwaverse/manwaverse/src/images/logo/Solo-Leveling-Logo-PNG-removebg-preview.png'
export default function Header(){
    return(
        <div id='header'>
      <ul className='ull'>
        <li><img src={img1} alt='' id='img' /></li>
        <li><a>Home</a></li>
        <li><a>Characters</a></li>
        <li><a>Help</a></li>
        <li className='rt'>
          <li><a>Sign up</a></li>
          <li><a><textarea id='area'>Search Here</textarea></a></li>
        </li>
      </ul>
    </div>
    )
}