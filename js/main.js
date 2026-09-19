(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    // Contact form - submissions are emailed to info@omacoprofessionalservices.com via FormSubmit.co
    var formEndpoint = 'https://formsubmit.co/ajax/info@omacoprofessionalservices.com';
    var whatsappNumber = '2348038417610';

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var phone = $.trim($('#phone').val());
        var service = $.trim($('#service').val());
        var message = $.trim($('#message').val());
        var feedback = $('#form-feedback');

        feedback.removeClass('d-none alert-success alert-warning alert-danger');

        if (!name || !email || !phone || !service || !message) {
            feedback.addClass('alert-warning').text('Please fill in all the fields before sending.');
            return;
        }

        var mailTo = 'mailto:info@omacoprofessionalservices.com?subject=' +
            encodeURIComponent('Enquiry from ' + name) + '&body=' +
            encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nService: ' + service + '\n\n' + message);

        var $btn = $(form).find('button[type="submit"]');
        var original = $btn.html();
        $btn.prop('disabled', true).html('Sending...');

        $.ajax({
            url: formEndpoint,
            method: 'POST',
            data: $(form).serialize(),
            dataType: 'json',
            headers: {
                'Accept': 'application/json'
            }
        }).done(function (res) {
            if (res && String(res.success) === 'false') {
                var reason = (res.message || '').trim();
                feedback.addClass('alert-warning').html(
                    '<i class="fa fa-envelope me-2"></i>We could not send your message right now. ' +
                    (reason ? reason + ' ' : '') +
                    'Please email us at <a href="' + mailTo + '" class="alert-link">info@omacoprofessionalservices.com</a> ' +
                    'or call +234 803 841 7610.'
                );
                return;
            }
            feedback.addClass('alert-success').html(
                '<i class="fa fa-check-circle me-2"></i>Thank you, ' + name +
                '. Your message has been sent - we will get back to you shortly.'
            );
            form.reset();
        }).fail(function () {
            feedback.addClass('alert-warning').html(
                '<i class="fa fa-envelope me-2"></i>We could not send your message right now. ' +
                'Please email us at <a href="' + mailTo + '" class="alert-link">info@omacoprofessionalservices.com</a> ' +
                'or chat with us on <a href="https://wa.me/' + whatsappNumber + '" target="_blank" class="alert-link">WhatsApp</a>.'
            );
        }).always(function () {
            $btn.prop('disabled', false).html(original);
        });
    });

    // Services dropdown: hover to open, click link to navigate
    $('.services-dropdown').on('mouseenter', function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }).on('mouseleave', function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });

    
})(jQuery);

