import poked from "../resources/images/switchds.png";
export const Banner = () => {
    return(
        <container id="home">
<h1 className="animate-character">
    Welcome to My Portfolio 
</h1>
<div class="parent-container">
<div className="poke-container">
  <img className="poke" src={poked} alt="Pokemon" />
  <div className="poke-text">
   Muhammad Aliyan Ul Haq Hassani
  </div>
</div>

<p className="desc">
Greetings! I'm a dedicated Computer Science student deeply inspired by the world of gaming. I'm driven by the potential of code to craft immersive and enjoyable experiences. Looking forward to the possibility of joining your dynamic team!
</p>
</div>
</container>
)
}