const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Salvador Dali",
        username: "dal1904",
        location: "Catalonia, Spain",
        avatar: "images/avatar-salvador-dali.jpg",
        post: "images/post-dali.jpg",
        comment: "those who don't want to imitate anything, produce nothing",
        likes: 412
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post")

function buildPost() {
    for (let i = 0; i < posts.length; i++) {
        const item = posts[i]        
        const postTemplate = `
        <div class="container">
        <section class="post-container">
            <div class="post-header">
                <img src="${item.avatar}" class="post-avatar" alt="Painter avatar">
                <div>
                    <h1>${item.name}</h1>
                    <h2>${item.location}</h2>
                </div>
            </div>
        </section>
            
        <img src="${item.post}" class="post-img" alt="main post image">

        <section class="post-container">
            <div class="post-footer">
                <div class="btn like">
                    <img src="images/icon-heart.png" class="heart-empty">
                    <img src="images/icon-heart-filled.png" class="heart-full">
                </div>
                <img src="images/icon-comment.png" class="btn comment">
                <img src="images/icon-dm.png" class="btn dm">
            </div>
            
            <span class="like-count"><span class="total-likes">${item.likes}</span> likes</span>
            
            <div class="caption">
                <p class="post-username post-caption"><strong>${item.username}</strong> ${item.comment}</p>
            </div>

        </section>
        </div>`

        postEl.innerHTML += postTemplate
    }
}

function likeBtn() {
    document.querySelectorAll(".like").forEach(btn =>
        btn.addEventListener("click", toggleLike))
}

function toggleLike() {
    
    const likesEl = this.parentElement.nextElementSibling.firstElementChild
    
    let count = Number(likesEl.textContent)
    if (this.classList.contains("on")) {
        count--
    } else {
        count++
    }

    this.classList.toggle("on")
    likesEl.textContent = count
}

buildPost()
likeBtn()
