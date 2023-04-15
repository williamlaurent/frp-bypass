const div = document.createElement('div');
div.style.color = 'black';
document.body.appendChild(div);

const links = [
//     {href: 'chrome://settings/', text: 'Open Chrome Settings'},
    {href: 'intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end', text: 'Open Lock Screen Settings'},
    {href: 'intent://com.android.settings/#Intent;scheme=android-app;end', text: 'Open Settings Menu'},
    {href: 'intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end', text: 'Open Google Search App'},
//     {href: 'intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end', text: 'Open Myfiles App'},
//     {href: 'chrome://settings/', text: 'Open Chrome Settings'}
];

links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerText = link.text;
    div.appendChild(a);
    div.appendChild(document.createElement('br'));
});

const otherAlternative = document.createElement('p');
otherAlternative.innerText = 'Other alternative, check https://magelangflasher.com/';
div.appendChild(otherAlternative);
