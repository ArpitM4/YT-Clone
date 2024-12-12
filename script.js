console.log("arpit")

for (let i = 0; i < 20; i++) {
    if (i==3){
        setTimeout(() => {
            console.log("waiting")
        }, 3000);
    }
var newDiv = document.createElement("div");  // Create a new <div> element
newDiv.className = "card";  // Add the class 'card' to the new <div>
newDiv.innerHTML=`<div class="card">
                <img src="https://picsum.photos/${400+i}/${225+i}"
                    alt="">
                <div class="dgrid">
                    <img src="https://picsum.photos/${100+i}"
                        alt="">
                    <div class="spa">
                        <span class="title">Video Title ${i+1}</span>
                        <span class="cname">Channel Name</span>
                        <span class="views">${Math.floor(100*(Math.random()))}K • ${Math.floor(24*(Math.random()))}h hours ago</span>
                    </div>
                    <span class="op">:</span>
                </div>
            </div>`

    document.getElementById("mid").appendChild(newDiv);  // Append the newly created <div> to the element with ID 'mid'
}
