document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("hidden");

            const icon = menuBtn.querySelector("i");

            if (mobileMenu.classList.contains("hidden")) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            } else {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            }

        });

    }


    /* ==========================================
       NAVBAR SCROLL
    ========================================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* ==========================================
       DATE SETUP
    ========================================== */

    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");

    const today = new Date();

    const todayString =
        today.toISOString().split("T")[0];


    if (checkIn) {

        checkIn.min = todayString;

    }


    if (checkOut) {

        checkOut.min = todayString;

    }


    /* ==========================================
       CHECK-IN CHANGE
    ========================================== */

    if (checkIn && checkOut) {

        checkIn.addEventListener("change", function () {

            checkOut.min = checkIn.value;

            if (
                checkOut.value &&
                checkOut.value <= checkIn.value
            ) {

                checkOut.value = "";

            }

        });

    }


    /* ==========================================
       SEARCH ROOMS
    ========================================== */

    const searchBtn =
        document.getElementById("searchBtn");

    const searchMessage =
        document.getElementById("searchMessage");


    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            const checkInValue =
                document.getElementById("checkIn").value;

            const checkOutValue =
                document.getElementById("checkOut").value;

            const adults =
                document.getElementById("adults").value;

            const children =
                document.getElementById("children").value;


            /* Validation */

            if (!checkInValue || !checkOutValue) {

                searchMessage.classList.remove("hidden");

                searchMessage.className =
                    "mt-4 p-3 text-sm bg-red-50 text-red-700";

                searchMessage.textContent =
                    "Please select both check-in and check-out dates.";

                return;

            }


            if (checkOutValue <= checkInValue) {

                searchMessage.classList.remove("hidden");

                searchMessage.className =
                    "mt-4 p-3 text-sm bg-red-50 text-red-700";

                searchMessage.textContent =
                    "Check-out date must be after check-in date.";

                return;

            }


            /* Success */

            searchMessage.classList.remove("hidden");

            searchMessage.className =
                "mt-4 p-3 text-sm bg-green-50 text-green-700";

            searchMessage.textContent =
                `Searching available rooms for ${adults} adult(s) and ${children} child(ren)...`;



            /* Future Rooms Page */

            setTimeout(function () {

                window.location.href =
                    `rooms.html?checkin=${checkInValue}&checkout=${checkOutValue}&adults=${adults}&children=${children}`;

            }, 800);

        });

    }

});