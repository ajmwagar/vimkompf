Vim�UnDo� ��B?3T�I����� ��}���P|YF,�U�                       W                          Z�xA   
 _�                    U       ����                                                                                                                                                                                                                                                                                                                                                           Z�Tg    �  T  V  �                       if (!info.from){5�_�                   V   /    ����                                                                                                                                                                                                                                                                                                                                                           Z�Ty     �  V  X  �                        // �  V  X  �    5�_�                   W       ����                                                                                                                                                                                                                                                                                                                                                           Z�Tz     �  V  W                            // c5�_�                   U       ����                                                                                                                                                                                                                                                                                                                                                           Z�T{     �  U  W  �                        �  U  W  �    5�_�                   V        ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  U  W  �                         callback(true)5�_�                   U       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  T  V  �      2                if (!info.from && user.ignoreBCC){5�_�                   U   "    ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  T  V  �      5                if (!info.from) { && user.ignoreBCC){5�_�      	             U   "    ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  T  W  �      2                if (!info.from) { user.ignoreBCC){5�_�      
           	  V       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  U  W  �      '                  if ()user.ignoreBCC){5�_�   	              
  W        ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  W  Y  �                          �  W  Y  �    5�_�   
                X       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  Y  [  �                          �  Y  [  �    �  X  [  �                        �  X  Z  �    5�_�                   Z   *    ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  Y  [  �      *                    info.from = user.email5�_�                           ����                                                                                                                                                                                                                                                                                                                                                           Z�T�    �  �  �            };�  �  �          (    listenForMessages: listenForMessages�  �  �              stopSubs: stopSubs,�  �  �              start: start,�  �  �            module.exports = {�  �  �             */�  �  �          "   * @module /lib/client/responder�  �  �             * Autoresponder for gmail�  �  �            /**�  �  �            }�  �  �              });�  �  �                }�  �  �          H        User.findOneAndUpdate({id: user.id}, {$set: {aliases: string}});�  �  �                  // update alias list�  �  �          	        }�  �  �          6          string[i]  = res.data.sendAs[i].sendAsEmail;�  �  �          5        for (i = 0; i < res.data.sendAs.length; i++){�  �  �                  var string = [];�  �  �          "        // make an array of emails�  �  �                else {�  �  �                }�  �  �                  console.error(err);�  �  �                if(err){�  �  �              }, function (err, res) {�  �  �                auth: oauth2�  �  �                userId: user.id,�  �  �          &    gmail.users.settings.sendAs.list({�  �  �          !    // Get alias list from google�  �  �          $  function getAliases(user, oauth2){�  �  �             */�  �  �          (   * @returns {String[]} list of aliases�  �  �          ;   * @param {object} oauth2 - a authenticated oauth2client.�  �  �          )   * @param {object} user - a user object�  �  �          &   * Return a list of alias from gmail�  �  �            /**�  �  �            }�  �  �          	      });�  �  �                  auth: oauth2�  �  �                  userId: 'me',�  �  �                {�  �  �              gmail.users.stop(�  �  �            function stopSubs(oauth2) {�  �  �             */�  �  �          D   * @param {Object} oauth2 - a oauth2 client with valid credentails�  �  �          "   * Stop listening on users inbox�  �  �            /**�  �  �            }�  �  �              return encodedMail;�  �  �              info = null;�  �  �          j    var encodedMail = new Buffer(str, 'utf-8').toString("base64").replace(/\+/g, '-').replace(/\//g, '_');�  �  �               // Encode message to base 64�  �  �              }�  �  �                console.log(str);�  �  �              if (debug){�  �  �              ].join('');�  �  �          �      "<html><head> <style> body { text-align: left; } </style> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> </head><body>" + message + "</body></html>"�  �  �          `      "subject: " + "=?utf-8?B?" +  new Buffer(subject, 'utf-8').toString("base64") +  "?=\n\n",�  �  �          4      "from: ", user.name + " <" + from + ">", "\n",�  �  �                "to: ", to, "\n",�  �  �          *      "Content-Transfer-Encoding: 7bit\n",�  �  �          5      "Content-Type: text/html; charset='UTF-8'\r\n",�  �  �                "MIME-Version: 1.0\n",�  �  �              var str = [�  �  �              // Mime/headers handling�  �  �          =  function makeBody(to, from, subject, message, user, info) {�  �  �             */�  �  �          1   * @returns {var} a raw version of your message�  �  �          /   * @param {string} message - the message body�  �  �          9   * @param {string} subject - the subject of the message�  �  �          -   * @param {string} from - the senders email�  �  �          .   * @param {string} to - the recipeants email�  �  �             * Make a new message�  �  �            /**�  �  �            }�  �  �          #    // [END pubsub_listen_messages]�  �  �              // }, 64000 * 1000);�  �  �          =    //   console.log(`${messageCount} message(s) received.`);�  �  �          @    //   subscription.removeListener('message', messageHandler);�  �  �              // setTimeout(() => {�  �  �          /    subscription.on(`message`, messageHandler);�  �  �          3    // Listen for new messages until timeout is hit�  �  �              };�  �  �          	      });�  �  �          	        }�  �  �                    }�  �  �                      messageCount += 1;�  �  �                      message.ack();�  �  �          #            // Ack and add to count�  �  �          .            handleMessage(user, oauth2client);�  �  �                      // Handle message�  �  �                      };�  �  �                        expiry_date: true�  �  �          6              refresh_token: user.tokens.refreshToken,�  �  �          4              access_token: user.tokens.accessToken,�  �  �          (            oauth2client.credentials = {�  �  �          z            var oauth2client = new google.auth.OAuth2(config.get('OAUTH2_CLIENT_ID'), config.get('OAUTH2_CLIENT_SECRET'));�  �  �          #            // Create oauth2 client�  �  �          %          if (user.outriggerEnabled){�  �  �                  else if (user){�  �  �          	        }�  �  �                    console.log(err);�  �  �                  if (err) {�  �  �          ?      User.findOne({email: data.emailAddress}, (err, user) => {�  �  �          $      // Find a user with this email�  ~  �                }�  }                      });�  l  n                        }�  j  l                          });�  h  j                            });�  g  i                              }�  f  h          ,                      callback(err, 'sent');�  e  g                                }�  d  f          +                        console.error(err);�  c  e                                else {�  b  d                                }�  a  c          5                        console.log('Message sent!');�  `  b                                 if (!err){�  _  a          0                    }, function(err, response) {�  ^  `                                raw: raw�  ]  _          =                      // Flip to and from to reply to message�  \  ^                              resource: {�  [  ]          !                    userId: 'me',�  Z  \                              auth: auth,�  Y  [          -                  gmail.users.messages.send({�  X  Z          !                  // Send message�  T  V          U                  raw =  makeBody(info.to,  info.from, subject, message, user, info);�  R  T          @                  console.log('Sending message to: ' + info.to);�  P  R          ;                  // Handle admin / precendence of accounts�  N  P                            }�  M  O          (                    message += "</div>";�  L  N                            else {�  K  M                            }�  J  L          o                    message +=  "<br><p>Sent via <a href='http://bit.ly/OutriggerSig'>Outrigger</a></p></div>";�  I  K          #                  if (!user.admin){�  G  I         %                  message =  "<div style='text-align: center;'><div style=\'display: inline-block; text-align: left;\'> " + user.responseMessage.message1 +"<table width='100%'> <tr> <td> <table border='0' cellpadding='0' cellspacing='0'> <tr> <td height='20' width='100%' style='font-size: 20px; line-height: 20px;'> &nbsp; </td> </tr> </table> <table border='0' align='center' cellpadding='0' cellspacing='0' style='margin:0 auto;'> <tbody> <tr> <td align='center'> <table border='0' cellpadding='0' cellspacing='0' style='margin:0 auto;'> <tr> <td align='center' bgcolor='#87be45' width='150' style='-moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;'> <a href='" + link + "' style='padding: 10px;width:150px;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 15px;font-family: sans-serif;color: #ffffff;background: #212F3D;border: 1px solid #566573;-moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;line-height:17px;' class='button_link'> Click to Notify!  </a> </td> </tr> </table> </td> </tr> </tbody> </table> <table border='0' cellpadding='0' cellspacing='0'> <tr> <td height='20' width='100%' style='font-size: 20px; line-height: 20px;'> &nbsp; </td> </tr> </table> </td> </tr> </table> " +  user.responseMessage.message2;�  E  G          Z                  subject = user.responseMessage.prefix + " " + info.pmsg.headers.subject;�  C  E          ,                  var raw, message, subject;�  A  C          B                  // Handle sending correct info through gmail api�  >  @          G                  console.log('Subject: ' + info.pmsg.headers.subject);�  <  >         `                  var link = "https://my.outriggerapp.com/notify/" + token + "/" + messageCount + "/" + encodeURIComponent("*New+message+from:*%0A" + encodeURIComponent(info.pmsg.headers.from.replace(' ', '+')) +  '%0A*Subject:*%0A' + info.pmsg.headers.subject.replace(' ', '+').replace('/', '%2F').replace('\'', '%27').replace('\"', '%22') + "") + "";�  ;  =          @                  // Create notification link to send with email�  9  ;                            }�  8  :          %                    console.log(err);�  7  9                            if (err){�  6  8                            });�  5  7                              }�  3  5          |                      User.findOneAndUpdate({id: user.id}, {$pull: { delayedEmails: {add: info.pmsg.headers["reply-to"]}}});�  2  4          u                      User.findOneAndUpdate({id: user.id}, {$pull: { delayedEmails: {add: info.pmsg.headers.from}}});�  1  3          (                      // Pull from delay�  /  1          g                      User.findOneAndUpdate({id: user.id}, {$pull:{idBlacklist: user.idBlacklist[0]}});�  .  0          6                    if (user.idBlacklist.length > 20){�  -  /          >                  User.findOne({id: user.id}, (err, user) => {�  ,  .                            }�  +  -          s                    User.findOneAndUpdate({id: user.id}, {$push:{notifylink: token, idBlacklist: messages[0].id}});�  *  ,          7                    //Update WITHOUT added to the delay�  )  +                            else{�  (  *                            }�  '  )                              });�  &  (                                });�  $  &          �                        User.findOneAndUpdate({id: user.id}, {$push:{notifylink: token, idBlacklist: messages[0].id, delayedEmails: { index: user.delayedEmails.length, add: info.pmsg.headers.from, tmstp: Date.now()}}});�  #  %          6                        // Update and add to the delay�  "  $          �                      User.findOneAndUpdate({id: user.id}, {$pull: { delayedEmails: {add: info.pmsg.headers.from}}}, (err, result) =>{�  !  #          (                      // Pull from delay�     "          @                    User.findOne({id: user.id}, (err, user) => {�    !          6                    // Delete the user from delay list�              (                  if(user.delayEnabled){�              .                  token = buf.toString('hex');�              ;                crypto.randomBytes(20, function(err, buf) {�              *                // Generate one-time token�                              var token;�              :                // Send email once link has been Generated�              "                // TODO fix domain�              %                // console.log(pmsg);�              3                console.log('Sending message ✓');�              ^              function sendMessage(auth, meta, user, messageCount, messages, info, callback) {�                             */�              F               * @throws {string} err - throws an error if one exists.�              S               * @param {number} index - the index of messages recieved for a topic�              8               * @param {object} user - object of a user�  
            @               * @param {var} meta - metadata to send the email.�  	            i               * @param {var} auth - an oauth2client that has been authorized to the users google account�    
          1               * send a Message from users gmail.�    	                        /**�                            },�                              //}}}�                              }�              W                  callback(null, oauth2, res.data, user, messageCount, messages, info);�                               else {�  �                            }�  �  �                            });�  �  �                              }�  �  �          [                      callback(null, oauth2, res.data, user, messageCount, messages, info);�  �  �          '                      // Send a message�  �  �          (                    if (result == true){�  �  �          '                  }).then((result) => {�  �  �          &                    getContacts(r, j);�  �  �          )                  new Promise((r, j) => {�  �  �          2                  // Start the recursive function.�  �  �                            }�  �  �                              });�  �  �                                }�  �  �          '                        callback(true);�  �  �          B                        console.warn(user.name + ' is an idiot.');�  �  �          Z                        // callback(null, oauth2, res.data, user, messageCount, messages);�  �  �          >                        // Continue since user has no contacts�  �  �                                else {�  �  �                                }�  �  �                                  }�  �  �          )                          resolve(false);�  �  �                                  else {�  �  �                                  }�  �  �          /                          getContacts(resolve);�  �  �          .                        if (counter <= loops){�  �  �          F                        // Only loop thru entire contact universe once�  �  �                                  }�  �  �          9                          console.log('Email not found');�  �  �          #                        if (debug){�  �  �          "                        counter++;�  �  �                                  }�  �  �                                    }�  �  �                                      }�  �  �                                        }�  �  �          (                                break i;�  �  �          -                                found = true;�  �  �          1                                // Stop searching�  �  �          4                                counter = loops + 1;�  �  �          1                                // Stop the loops�  �  �          .                                resolve(true);�  �  �          /                                // Resolve true�  �  �          !                                }�  �  �          =                                  console.log('Email found');�  �  �          +                                if (debug){�  �  �          �                              if (info.pmsg.headers.from.toLowerCase().includes(result.data.connections[i].emailAddresses[j].value.toLowerCase())){�  �  �          O                              // Compare from header with current email address�  �  �          c                            for (j = 0; j < result.data.connections[i].emailAddresses.length; j++){�  �  �          9                            // Loop through all addresses�  �  �                                      j:�  �  �          I                          if (result.data.connections[i].emailAddresses){�  �  �          @                          // Check if contact has email adresses�  �  �          M                        for (i = 0; i < result.data.connections.length; i++){�  �  �                                  i:�  �  �                                  }�  �  �          -                          console.log(loops);�  �  �          >                          console.log(result.data.totalItems);�  �  �          #                        if (debug){�  �  �          U                        loops = Math.ceil(parseInt(result.data.totalItems) / 2000.0);�  �  �          S                        // Determine amount of loops required to check all contacts�  �  �          =                        nextPage = result.data.nextPageToken;�  �  �          *                        // Save page token�  �  �          R                      else if (result.data.connections && result.data.totalItems){�  �  �                                }�  �  �          C                        console.error('Error Retrieving contacts');�  �  �          +                        console.error(err);�  �  �                                if (err){�  �  �          *                    },  (err, result) => {�  �  �          4                      personFields: 'emailAddresses'�  �  �          %                      pageSize: 2000,�  �  �          *                      pageToken: nextPage,�  �  �          #                      auth: oauth2,�  �  �          0                      resourceName: 'people/me',�  �  �          7                    peopleApi.people.connections.list({�  �  �          .                    // List the users contacts�  �  �                              var found;�  �  �          8                  function getContacts(resolve, reject){�  �  �                            counter = 0;�  �  �          /                  var nextPage, loops, counter;�  �  �          8                  const peopleApi = google.people('v1');�  �  �                            // Google api�  �  �          ,                if (user.restrictContacts) {�  �  �          z                // Use the contact module contacts.checkContacts(res, user, oauth2, messages, callback); Old contacts {{{ �  �  �                          }�  �  �          7                  console.log('Checking contacts ✓');�  �  �                          if (debug){�  �  �          S              function checkContacts (res, user, oauth2, messages, info, callback){�  �  �                        }, �  �  �                          }�  �  �          !                  callback(true);�  �  �          G                  // Continue to end function if email shouln't be sent�  �  �                            info = null;�  �  �          =                  console.warn('Email did not pass filters');�  �  �                          else {�  �  �                          }�  �  �          D                  callback(null, res, user, oauth2, messages, info);�  �  �                            // Continue�  �  �                            )) {�  �  �          8                  !filters.ignoreCC_BCC(user,  info.pmsg�  �  �          +                  // Ignore BCC / CC filter�  �  �          3                  filters.isImportant(user, res) &&�  �  �          +                  // Important email filter�  �  �          L                  !filters.checkDelayedList(user, info.pmsg.headers.from) &&�  �  �          &                  // Delay list filter�  �  �          B                  !filters.ignoreMailingLists(info.pmsg, user) && �  �  �          )                  // Ignore Mailing lists�  ~  �          4                  filters.noReplyCheck(info.pmsg) &&�  }                              // NO-Reply�  {  }          Z                  // !JSON.stringify(res.data).includes("my.outriggerapp.com\/notify") && �  z  |          V                  !info.pmsg.headers.subject.includes(user.responseMessage.prefix) && �  y  {          R                  // Make sure email is not a out of office message (prevent loop)�  w  y          J                  user.timeEnabled < Date.parse(info.pmsg.headers.date) &&�  v  x          K                  // Check if email was sent before outrigger was turned on�  t  v          +                  user.outriggerEnabled && �  s  u          >                  // Continue to check against outrigger logic�  r  t                          if (�  q  s                           */�  p  r          &                 * Order of Operations�  o  q                          /*�  l  n                          }�  k  m          6                  console.log('Checking message ✓');�  j  l                          if (debug){�  i  k          M              function checkMsg(res, user, oauth2, messages, info, callback){�  h  j                        },�  g  i          B                callback(null, res, user, oauth2, messages, info);�  e  g                          }�  d  f          3                  info.to = info.pmsg.headers.from;�  c  e                          else {�  b  d                          }�  a  c          :                  info.to = info.pmsg.headers['reply-to'];�  `  b          3                if (info.pmsg.headers['reply-to']){�  _  a          !                // define to here�  ]  _                          }�  \  ^          )                  info.from = user.email;�  [  ]          1                  // TODO Make this default alias�  Z  \                            }�  Y  [          +                    info.from = user.email;�  X  Z                            else {�  W  Y                            }�  V  X          !                  callback(true);�  U  W          &                  if (user.ignoreBCC){�  T  V          "                if (!info.from) { �  S  U          .                // fallback to default account�  P  R                          }�  O  Q                            }�  N  P                              }�  M  O                                }�  L  N                                  break;�  K  M          4                        info.from = user.aliases[i];�  J  L          K                      if (info.pmsg.headers.bcc.includes(user.aliases[i])){�  I  K          >                    for (i = 0; i < user.aliases.length; i++){�  H  J                            else {�  G  I                            }�  F  H          +                    info.from = user.email;�  E  G          )                    console.log('Found');�  D  F          B                  if (info.pmsg.headers.bcc.includes(user.email)){�  C  E          9                  console.log('Checking BCC for email.');�  B  D          +                if (info.pmsg.headers.bcc){�  A  C          -                // Check BCC for emailAddress�  @  B                          }�  ?  A                            }�  =  ?                              }�  <  >                                }�  ;  =                                  break;�  :  <          4                        info.from = user.aliases[i];�  9  ;          J                      if (info.pmsg.headers.cc.includes(user.aliases[i])){�  8  :          >                    for (i = 0; i < user.aliases.length; i++){�  7  9                            else {�  6  8                            }�  5  7          +                    info.from = user.email;�  4  6          )                    console.log('Found');�  3  5          A                  if (info.pmsg.headers.cc.includes(user.email)){�  2  4          8                  console.log('Checking CC for email.');�  1  3          *                if (info.pmsg.headers.cc){�  0  2          ,                // Check CC for emailAddress�  /  1                          }�  .  0                            }�  ,  .                              }�  +  -                                }�  *  ,                                  break;�  )  +          4                        info.from = user.aliases[i];�  (  *          J                      if (info.pmsg.headers.to.includes(user.aliases[i])){�  '  )          >                    for (i = 0; i < user.aliases.length; i++){�  &  (                            else {�  %  '                            }�  $  &          +                    info.from = user.email;�  #  %          )                    console.log('Found');�  "  $          A                  if (info.pmsg.headers.to.includes(user.email)){�  !  #          8                  console.log('Checking TO for email.');�    !          *                if (info.pmsg.headers.to){�               ,                // Check to for emailAddress�              #                // Define from here�              Q              function preCheckHook(res, user, oauth2, messages, info, callback){�              7              // Define variables for rest of outrigger�                          },�                            }�                                }�              F                    callback(null, res, user, oauth2, messages, info);�              9                    // Continue since feature not enabled�                                else {�                              }5�_�                   ]       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  \  ]          %              info.from = user.email;5�_�                   \       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  [  \          -              // TODO Make this default alias5�_�                   Y       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�     �  Y  [  �    �  Y  Z  �    5�_�                   Z       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�    �  Y  [  �      -              // TODO Make this default alias5�_�                   V       ����                                                                                                                                                                                                                                                                                                                                                           Z�T�    �  V  X  �                      �  V  X  �    5�_�                   X       ����                                                                                                                                                                                                                                                                                                                                                           Z�r+    �  X  Z  �                      �  X  Z  �    5�_�                   Y       ����                                                                                                                                                                                                                                                                                                                                                           Z�w�     �  Y  [  �    �  Y  Z  �    5�_�                   Z   N    ����                                                                                                                                                                                                                                                                                                                                                           Z�w�    �  Y  [  �      o                User.findOneAndUpdate({id: user.id}, {$push:{notifylink: token, idBlacklist: messages[0].id}});5�_�                  Y        ����                                                                                                                                                                                                                                                                                                                         Z          Y           V        Z�x     �  X  Y                          info = null;   ]                User.findOneAndUpdate({id: user.id}, {$push:{ idBlacklist: messages[0].id}});5�_�                   V       ����                                                                                                                                                                                                                                                                                                                         Y          Y           V        Z�x    �  V  Y  �    �  V  W  �    5�_�                   X       ����                                                                                                                                                                                                                                                                                                                         [          [           V        Z�x   	 �  X  Z  �    5�_�                    V        ����                                                                                                                                                                                                                                                                                                                         \          \           V        Z�x@   
 �  V  X                        �  V  X       5�_�                  Z        ����                                                                                                                                                                                                                                                                                                                                                           Z�x      �  Y  [  �       5�_�                  Z        ����                                                                                                                                                                                                                                                                                                                                                           Z�w�     �  Y  [  �      k5�_�                   Z   <    ����                                                                                                                                                                                                                                                                                                                                                           Z�w�     �  Y  \  �      _                User.findOneAndUpdate({id: user.id}, {$push:{ idBlacklist: messages[0].id}}); }5��