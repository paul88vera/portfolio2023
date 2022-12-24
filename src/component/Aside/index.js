export default function Aside() {
  return (
    <aside id="aside" className=".d-md-none .d-lg-block">
        <img src="http://unsplash.it/210/150" alt="" />
        <h2>Paul Vera</h2>
        <br/>
        <div class="nav navbar text-center">
          <ul className="">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
      </aside>
  )
}