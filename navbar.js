(function () {
  const path = window.location.pathname;

  function isActive(key) {
    if (key === 'work') {
      return path === '/pages/work.html' ||
             path.startsWith('/pages/photo/') ||
             path.startsWith('/pages/tech/');
    }
    if (key === 'writing') {
      return path === '/pages/writing.html' ||
             path.startsWith('/pages/writing/');
    }
    if (key === 'about') {
      return path === '/' || path === '/index.html';
    }
    return false;
  }

  const links = [
    { label: '←Commercial', href: 'https://suannazhong.com' },
    { label: 'About/CV',     href: '/index.html',         key: 'about'   },
    { label: 'Work',         href: '/pages/work.html',    key: 'work'    },
    { label: 'Writing',      href: '/pages/writing.html', key: 'writing' },
  ];

  const el = document.getElementById('navbar');
  el.className = 'navbar';
  el.innerHTML = links.map(function (link) {
    const active = link.key && isActive(link.key) ? ' class="active"' : '';
    return '<a href="' + link.href + '"' + active + '><button class="button">' + link.label + '</button></a>';
  }).join('\n');
})();
