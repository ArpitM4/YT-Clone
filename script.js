console.log("arpit")
for (let i = 0; i < 20; i++) {
var newDiv = document.createElement("div");  // Create a new <div> element
newDiv.className = "card";  // Add the class 'card' to the new <div>
newDiv.innerHTML=`<div class="card">
                <img src="https://i.ytimg.com/vi/n7Pwpxj3eQg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNoBT7muXOL4LdvmAbeY7CXDMy3w"
                    alt="">
                <div class="dgrid">
                    <img src="https://yt3.ggpht.com/p89RToB7j2iu9BYhK2Zn6vLkxJXYC9cAbxfJ0eMvUd4jrsyRQtuYIvinn8N2H6utyeBKcrvlhSE=s68-c-k-c0x00ffffff-no-rj"
                        alt="">
                    <div class="spa">
                        <span class="title">Video Title</span>
                        <span class="cname">Channel Name</span>
                        <span class="views">135K ~ 11h hours ago</span>
                    </div>
                    <span class="op">:</span>
                </div>
            </div>`

    document.getElementById("mid").appendChild(newDiv);  // Append the newly created <div> to the element with ID 'mid'
}
