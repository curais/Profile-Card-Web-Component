
/**
 * @jest-environment jsdom
 */

test("profile card renders", () => {
    document.body.innerHTML = `
        <profile-card
        data-testid="profile-card"
        name="Cris"
        title="Dev"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus, consectetur non est ut, iaculis sagittis sapien. Proin quis leo nulla. Donec vehicula elit eget massa porta, in sodales purus sagittis. Vivamus maximus aliquet finibus. Nam eget bibendum felis, non accumsan nisl. Mauris et dapibus felis."
        img-src="https://archive.org/download/zebra_202010/Gingerbread%20Man.jpg"
        github="https://github.com/curais"
        linkedin="https://www.linkedin.com/in/curais/"
        twitter-x="https://twitter.com/">

        </profile-card>`
    expect(document.body.innerHTML).toContain("profile-card")
});

test("profile card renders properties", () => {
    const[name,title,description,imgSrc,github,linkedin,twitter] = [
        'Cris',
        'Dev',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'https://archive.org/download/zebra_202010/Gingerbread%20Man.jpg',
        'https://github.com/curais',
        'https://www.linkedin.com/in/curais/',
        'https://twitter.com/'
    ]
    document.body.innerHTML = `
        <profile-card
        data-testid="profile-card"
        name="${name}"
        title="${title}"
        description="${description}"
        img-src="${imgSrc}"
        github="${github}"
        linkedin="${linkedin}"
        twitter-x="${twitter}">

        </profile-card>`
    expect(document.body.innerHTML).toContain(name)
    expect(document.body.innerHTML).toContain(title)
    expect(document.body.innerHTML).toContain(description)
    expect(document.body.innerHTML).toContain(imgSrc)
    expect(document.body.innerHTML).toContain(github)
    expect(document.body.innerHTML).toContain(linkedin)
    expect(document.body.innerHTML).toContain(twitter)
});