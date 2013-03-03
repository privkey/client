Cryptographic Source Code
======
PrivKey includes OpenPGPjs (http://www.openpgpgjs.org) in order to fullfill its cryptographic functionality. 
This directory _src/_ contains the source code in an uncompressed manner. It can be reviewed for correct functionality.

For better performance it is compressed into a single file _openpgpg.js_.

We applied the Closure Compiler (http://closure-compiler.appspot.com/home) in 
    SIMPLE_OPTIMIZATIONS
mode.
To verify our result simply copy & paste:
```
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
```

In a productive version all HTML, CSS and JavaScript files will be compressed as well.

For development reasons copy & paste into index.html
´´´
<script type="text/javascript" src="src/ciphers/hash/sha.js"></script>
<script type="text/javascript" src="src/ciphers/hash/md5.js"></script>
<script type="text/javascript" src="src/ciphers/hash/ripe-md.js"></script>

<!-- crypto libs -->
<script type="text/javascript" src="src/ciphers/symmetric/aes.js"></script>
<script type="text/javascript" src="src/ciphers/symmetric/cast5.js"></script>
<script type="text/javascript" src="src/ciphers/symmetric/dessrc.js"></script>
<script type="text/javascript" src="src/ciphers/symmetric/twofish.js"></script>
<script type="text/javascript" src="src/ciphers/symmetric/blowfish.js"></script>

<script type="text/javascript" src="src/ciphers/asymmetric/jsbn.js"></script>
<script type="text/javascript" src="src/ciphers/asymmetric/jsbn2.js"></script>
<script type="text/javascript" src="src/ciphers/asymmetric/dsa.js"></script>
<script type="text/javascript" src="src/ciphers/asymmetric/elgamal.js"></script>
<script type="text/javascript" src="src/ciphers/asymmetric/rsa.js"></script>

<script type="text/javascript" src="src/ciphers/openpgp.crypto.js"></script>
<script type="text/javascript" src="src/ciphers/openpgp.crypto.sym.js"></script>
<script type="text/javascript" src="src/ciphers/openpgp.cfb.js"></script>

<!-- compression -->
<script type="text/javascript" src="src/compression/zlib/jsxcompressor.js"></script>

<!-- encoding -->
<script type="text/javascript" src="src/encoding/base64.js"></script>
<script type="text/javascript" src="src/encoding/openpgp.encoding.asciiarmor.js"></script>
<script type="text/javascript" src="src/encoding/openpgp.encoding.js"></script>

<!-- openpgp types -->
<script type="text/javascript" src="src/type/openpgp.type.keyid.js"></script>
<script type="text/javascript" src="src/type/openpgp.type.mpi.js"></script>
<script type="text/javascript" src="src/type/openpgp.type.s2k.js"></script>

<!-- openpgp packets -->
<script type="text/javascript" src="src/packet/openpgp.packet.compressed.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.encrypteddata.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.encryptedintegrityprotecteddata.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.encryptedsessionkey.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.keymaterial.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.literaldata.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.marker.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.modificationdetectioncode.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.onepasssignature.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.signature.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.userattribute.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.userid.js"></script>
<script type="text/javascript" src="src/packet/openpgp.packet.js"></script>

<!--  openpgp impl. -->
<script type="text/javascript" src="src/openpgp.js"></script>
<script type="text/javascript" src="src/config/openpgp.config.js"></script>
<script type="text/javascript" src="src/openpgp.keyring.js"></script>
<script type="text/javascript" src="src/openpgp.msg.message.js"></script>
<script type="text/javascript" src="src/openpgp.msg.privatekey.js"></script>
<script type="text/javascript" src="src/openpgp.msg.publickey.js"></script>
<script type="text/javascript" src="src/util/util.js"></script>
´´´
