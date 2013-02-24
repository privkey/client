var privkey = {
    init: function () {
        privkey.crypto.init();
        $(document).ready(function() {
            // noscript issue, makes DOM visible
            $('head').after('<style type="text/css">[data-role="page"] {display: block;}</style>');
            // set elements event handler as soon as DOM is ready
            privkey.ui.setHandler();
        });
        // fix focus issues on page transmissions
        $(document).live('pagechange', function(toPage, options) {
            if (options.toPage.selector == "#increaseSecurity") {
                $('#securePassword').focus();
            } else if (options.toPage[0].id == "msg") {
                if (options.options.allowSamePageTransition == false) {
                    $('#replyMessage').focus();
                } else {
                    $('#toEmailsNew').focus();
                }
            }
        });
    },

    crypto: {
        openpgp: new _openpgp(),
        init: function() {
            // modification in src/encoding/openpgp.encoding.asciiarmor.js
            // shows version and commentstring only
            openpgp_encoding_armor_addheader = function() {
                var result = "";
                //if (openpgp.config.config.show_version) {
                result += /*"Version: "+*/openpgp.config.versionstring+'\r\n';
                //}
                //if (openpgp.config.config.show_comment) {
                result += /*"Comment: "+*/openpgp.config.commentstring+'\r\n';
                //}
                result += '\r\n';
                return result;
            };
            privkey.crypto.openpgp.init();
            privkey.crypto.openpgp.config.versionstring = "This is a secure PrivKey message.";
        }
    },

    // contains everything that deals with DOM of _U_ser _I_nterface and evaluates input
    ui: {
        // sets event handlers for all pages
        setHandler: function () {
            privkey.ui.setStartHandler();
            privkey.ui.setIncreaseSecurityHandler();
            privkey.ui.setMsgHandler();
        },
        // handles events on #start page
        setStartHandler: function () {
            $('#toEmailsStart').on('keyup', function() {
                if (privkey.ui.validateEmail($('#toEmailsStart').val())) {
                    $('label[for="toEmailsStart"]').remove();
                }
            });
            $('#messageStart').on('keyup', function() {
                if ($('#messageStart').val().replace(/\s/g, '') != "") {
                    $('label[for="messageStart"]').remove();
                }
            });

            $('#buttonStart').on('click', function() {
                var proceed = true;
                $('#start label').remove();
                if (!privkey.ui.validateEmail($('#toEmailsStart').val())) {
                    $('#toEmailsStart').after('<label for="toEmailsStart" class="red">Enter a valid email address</label>');
                    proceed = false;
                }

                if ($('#messageStart').val().replace(/\s/g, '') == "") {
                    $('#messageStart').after('<label for="messageStart" class="red">Enter a message</label>');
                    proceed = false;
                }

                if (proceed) {
                    $.mobile.changePage($('#increaseSecurity'));
                }
            });

            $('#email').on('keyup', function() {
                if (privkey.ui.validateEmail($('#email').val())) {
                    $('#login label[for="email"]').remove();
                }
            });
            $('#yourPassword').on('keyup', function () {
                if ($('#yourPassword').val() != "") {
                    $('#login label[for="yourPassword"]').remove();
                }
            });

            // login popup
            $( "#login" ).bind({
                popupafteropen: function(event, ui) {
                    $('#email').focus();
                }
            });

            $('#loginButton').on('click', function() {
                var proceed = true;
                $('#login label').remove();

                if (!privkey.ui.validateEmail($('#email').val())) {
                    $('#email').after('<label for="email" class="red">Enter a valid email address</label>');
                    proceed = false;
                }

                if ($('#yourPassword').val() == "") {
                    $('#yourPassword').after('<label for="yourPassword" class="red">Enter your password</label>');
                    proceed = false;
                }

                if (proceed) {
                    alert("Log in");
                }
            });

            $('#toEmailsStart').focus();
        },
        // handles events on increaseSecurity
        setIncreaseSecurityHandler: function () {
            $('#securePassword').pwdstr('#time');
            $('#securePassword').on('keyup', function() {
                if ($('#time').text().indexOf('years') != -1) {
                    $('label[for="securePassword"]').not('.permanent').remove();
                }
            });
            $('#securePasswordConfirm').on('keyup', function() {
                if ($('#securePassword').val() == $('#securePasswordConfirm').val()) {
                    $('label[for="securePasswordConfirm"]').remove();
                }
            });
            $('#yourEmail').on('keyup', function() {
                if (privkey.ui.validateEmail($('#yourEmail').val())) {
                    $('label[for="yourEmail"]').remove();
                    // check whether we have an user account for this email address.
                    // In case we have: Take email address (and perhaps password) and go to login
                }
            });
            $('#tAndcAccept').on('change', function() {
                if ($('#tAndcAccept').attr('checked') == 'checked') {
                    $('label[for="tAndcAccept"]:not(.permanent)').remove();
                }
            });

            $('#proceedButton').on('click', function() {
                var proceed = true;
                $('#increaseSecurity label').not('.permanent').remove();
                if (!privkey.ui.validateEmail($('#yourEmail').val())) {
                    $('#yourEmail').after('<label for="yourEmail" class="red">Enter your email address correctly</label>');
                    proceed = false;
                }

                if ($('#time').text().indexOf('years') == -1) {
                    $('#securePassword').after('<label for="securePassword" class="red">Choose a stronger password</label>');
                    proceed = false;
                }

                if ($('#securePassword').val() != $('#securePasswordConfirm').val() || $('#securePasswordConfirm').val().replace(/\s/g) == "") {
                    $('#securePasswordConfirm').after('<label for="securePasswordConfirm" class="red">Confirmed password does not match</label>');
                    proceed = false;
                }

                if ($('#tAndcAccept').attr('checked') != "checked") {
                    $('label[for="tAndcAccept"]').after('<label for="tAndcAccept" class="red">Please agree to our terms an conditions</label>');
                    proceed = false;
                }

                if(proceed) {
                    $.mobile.loading( 'show', {
                        text: 'generate key pair...',
                        textVisible: true,
                        theme: 'e'
                    });
                    window.setTimeout("$.mobile.loading('show', {text: 'encrypting...', textVisible: true, theme: 'e'})", 1000);
                    window.setTimeout("$.mobile.loading('show', {text: 'sending...', textVisible: true, theme: 'e'})", 2000);
                    window.setTimeout("$.mobile.loading('hide')", 3000);
                    // save password hash + salt in db
                    /*
                     var keyPair = openpgp.generate_key_pair(1, 512, $('#yourEmail').val(), $('#securePassword').val());
                     mySecretKey = keyPair.privateKey;

                     var encryptedSecretKey = CryptoJS.AES.encrypt(keyPair.privateKeyArmored, $('#securePassword').val());
                     alert(encryptedSecretKey);
                     localStorage['myEncryptedSecretKey'] = encryptedSecretKey;
                     // save encrypted secret key and public key in database

                     if ($('#messageStart').val().replace(/\s/g, '') != "") {
                     sendMessage($('#toEmailsStart').val(), $('#messageStart').val());
                     }
                     */
                    window.setTimeout("$.mobile.changePage($('#msg'))", 3001);
                }
            });

            $('#accept').on('click', function() {
                $('#tAndcAccept').attr("checked",true).checkboxradio("refresh");
            });
        },
        // handles events of #msg and #new
        setMsgHandler: function () {
            // when click on "new" in navbar changePage to #msg and make it to #new
            $('a.new').on('click', function() {
                $('#msg a.new').addClass('ui-btn-active ui-state-persist');
                location.hash = "new";
                $.mobile.changePage($('#msg'), {changeHash:false, allowSamePageTransition:true});

                $('#msg a.new').addClass('ui-btn-active ui-state-persist');
                $('#msg label').remove();

                $('#friendsEmails').text('');
                $('#friend').css('padding-top', '0');
                $('#friend').css('padding-bottom', '0');
                $('#toEmailsNew').css('display', 'inline');

                $('#loadPreviousMessages').remove();
                $('#msg [data-role="content"] [data-role="listview"]').remove();

                $('#msg textarea').attr('placeholder', 'New message...');
                $('#replyButton span.ui-btn-text').text('Send');
            });

            $('#toEmailsNew').on('keyup', function () {
                if (privkey.ui.validateEmail($('#toEmailsNew').val())) {
                    $('label[for="toEmailsNew"]').remove();
                }
            });

            $('#replyMessage').on('keyup', function() {
                if ($('#replyMessage').val().replace(/\s/g, '') != "") {
                    $('label[for="replyMessage"]').remove();
                }
            });

            $('#replyButton').on('click', function () {
                var proceed = true;
                $('#msg label:not(.permanent)').remove();

                if (!privkey.ui.validateEmail($('#toEmailsNew').val()) && $('#toEmailsNew').css('display') != "none") {
                    $('#toEmailsNew').after('<label for="toEmailsNew" class="red">Enter a valid email address</label>');
                    proceed = false;
                }
                if ($('#replyMessage').val().replace(/\s/g, '') == "") {
                    $('#replyMessage').after('<label for="replyMessage" class="red">Enter a message</label>');
                    proceed = false;
                }

                if (proceed) {
                    $.mobile.loading( 'show', {text: 'encrypting...', textVisible: true, theme: 'e'});
                    window.setTimeout("$.mobile.loading('show', {text: 'sending...', textVisible: true, theme: 'e'})", 1000);
                    window.setTimeout("$.mobile.loading('hide')", 2000);
                }
            });
        },
        // validates email addresses Todo: validate multiple email adresses, too
        validateEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
};

privkey.init();

// some old stuff, never mind, integrate elsewhere and remove at some time
function randString(stringLength) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < stringLength; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// required by OpenPGP Todo: mod, integrate into privkey object
function showMessages(msg) {
    console.log('OpenPGP: ' + msg);
}