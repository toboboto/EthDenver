#!/bin/bash

rt=0100000001ab71408c407d4095f3d553f81fa9bcf152cb3e1db45f1b404e3d8c21b05736c40200000000ffffffff0530ba0100000000001976a9143fc07f41171fb2f4ca1ba18e9c2af6f64844a3f588ac30ba0100000000001976a9144aca3a444eaea2bf25a7e573f74537c79b26c81888ac30ba0100000000001976a91455b33247fa691e6ab553ac5da8c02e3275969eac88ac00000000000000004f6a4c4c68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d634854446b4a2d6251714d266c6973743d5244634854446b4a2d6251714d2673746172745f726164696f3d318ff748db010000001976a914f5b7e108fb1fb10e2ac62ddc47ab53d9131d132988ac00000000

digibyte-cli fundrawtransaction $rt
# digibyte-cli sendrawtransaction $rt
