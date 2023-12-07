const robots = document.querySelector('.robotlar')
fetch('  http://localhost:3000/robots')
.then(response=>response.json())
.then(data=>{
    data.forEach(robotlar => {
        robots.innerHTML+=`      
        <div class="robot">
        <div class="sekil">
            <img class="hhh" src="https://preview.colorlib.com/theme/robotics/img/p1.png.webp" alt="">
        </div>
        <div class="detals">
           <div class="text1"><h2>The Upper Eye</h2></div> 
           <div class="text2"><p class="ggg">
            Who are in extremely love with eco friendly system.
            </p></div> 
        </div>
        
            <a href="#" class="jjj">View Details</a>
    </div>
        `

        
    });
})