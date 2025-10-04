const div = document.createElement('div');
div.style.color = 'black';
document.body.appendChild(div);

const links = [
    {href: 'intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end', text: 'Open Lock Screen Settings'},
    {href: 'intent://com.android.settings/#Intent;scheme=android-app;end', text: 'Open Settings Menu'},
    {href: 'intent://com.android.settings/wifi/#Intent;scheme=android-app;end', text: 'Open Wi-Fi Settings'},
    {href: 'intent://com.android.settings/bluetooth/#Intent;scheme=android-app;end', text: 'Open Bluetooth Settings'},
    {href: 'intent://com.android.settings/applications/#Intent;scheme=android-app;end', text: 'Open Application Management'},
    {href: 'intent://com.android.settings/security/#Intent;scheme=android-app;end', text: 'Open Security Settings'},
    {href: 'intent://com.android.settings/development/#Intent;scheme=android-app;end', text: 'Open Developer Options'},
    {href: 'intent://com.android.googlequicksearchbox/#Intent;scheme=android-app;end', text: 'Open Google Search App'},
    {href: 'intent://com.android.phone/#Intent;scheme=android-app;end', text: 'Open Phone Dialer'},
    {href: 'intent://com.android.camera2/#Intent;scheme=android-app;end', text: 'Open Camera App'},
    {href: 'intent://com.android.gallery3d/#Intent;scheme=android-app;end', text: 'Open Gallery'},
    {href: 'intent://com.android.providers.downloads.ui/#Intent;scheme=android-app;end', text: 'Open Downloads'},
    {href: 'intent://com.android.contacts/#Intent;scheme=android-app;end', text: 'Open Contacts App'}
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
