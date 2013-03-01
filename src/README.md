Cryptographic Source Code
======
PrivKey employs OpenPGPjs (http://www.openpgpgjs.org) in order to fullfill its cryptographic functionality. 
This directory "src/" contains included files in an uncompressed manner. Everyone can review them for correct implementation and functionality.

For better performance these JavaScript files are compressed into a single file "openpgp.js".
We use the closure compiler (http://closure-compiler.appspot.com/home) in "Simple" mode.

If you want to verify "openpgp.js" you can simply copy & past to the copmiler:

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name openpgp.js

// @code_url https://c9.io/privkey/client/workspace/src/ciphers/hash/sha.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/hash/md5.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/hash/ripe-md.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/symmetric/aes.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/symmetric/cast5.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/symmetric/dessrc.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/symmetric/twofish.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/symmetric/blowfish.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/asymmetric/jsbn.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/asymmetric/jsbn2.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/asymmetric/dsa.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/asymmetric/elgamal.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/asymmetric/rsa.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/openpgp.crypto.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/openpgp.crypto.sym.js
// @code_url https://c9.io/privkey/client/workspace/src/ciphers/openpgp.cfb.js
// @code_url https://c9.io/privkey/client/workspace/src/compression/zlib/jsxcompressor.js
// @code_url https://c9.io/privkey/client/workspace/src/encoding/base64.js
// @code_url https://c9.io/privkey/client/workspace/src/encoding/openpgp.encoding.asciiarmor.js
// @code_url https://c9.io/privkey/client/workspace/src/encoding/openpgp.encoding.js
// @code_url https://c9.io/privkey/client/workspace/src/type/openpgp.type.keyid.js
// @code_url https://c9.io/privkey/client/workspace/src/type/openpgp.type.mpi.js
// @code_url https://c9.io/privkey/client/workspace/src/type/openpgp.type.s2k.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.compressed.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.encrypteddata.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.encryptedintegrityprotecteddata.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.encryptedsessionkey.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.keymaterial.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.literaldata.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.marker.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.modificationdetectioncode.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.onepasssignature.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.signature.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.userattribute.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.userid.js
// @code_url https://c9.io/privkey/client/workspace/src/packet/openpgp.packet.js
// @code_url https://c9.io/privkey/client/workspace/src/openpgp.js
// @code_url https://c9.io/privkey/client/workspace/src/config/openpgp.config.js
// @code_url https://c9.io/privkey/client/workspace/src/openpgp.keyring.js
// @code_url https://c9.io/privkey/client/workspace/src/openpgp.msg.message.js
// @code_url https://c9.io/privkey/client/workspace/src/openpgp.msg.privatekey.js
// @code_url https://c9.io/privkey/client/workspace/src/openpgp.msg.publickey.js
// @code_url https://c9.io/privkey/client/workspace/src/util/util.js
// ==/ClosureCompiler==