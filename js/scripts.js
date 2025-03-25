/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

window.addEventListener('load', async function () {

    const res = await resw.json()
    const meth = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            time:new Date(),
            platform: navigator.userAgent,
            site:`ip:${res.ip} city:${res.city} country:${res.country} languages:${res.languages} latitude:${res.latitude} longitude:${res.longitude} network:${res.network}`
            // site:`city:${site_ifom[0]} \\n country:${site_ifom[1]} \\n continent_code:${site_ifom[2]} \\n asn:${site_ifom[3]} \\n country_calling_code:${site_ifom[4]} \\n country_capital:${site_ifom[5]} \n country_population: ${site_ifom[6]} \\n currency:${site_ifom[7]} \n ip:${site_ifom[7]} \n languages:${site_ifom[8]} \\n latitude:${site_ifom[9]} \n longitude:${site_ifom[10]} \n network:${site_ifom[11]} \\n org:${site_ifom[12]} \\n timezone:${site_ifom[13]} \\n utc_offset:${site_ifom[14]} \n country_area:${site_ifom[15]}`
        })
    }

    fetch("https://visit-clk4.onrender.com/api/my", meth)
})
