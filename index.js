'use strict';
const path = require('path');
const macosVersion = require('macos-version');
const execa = require('execa');
const electronUtil = require('electron-util/node');

const binary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'main');

module.exports = async () => {
	macosVersion.assertGreaterThanOrEqualTo('10.11');

	const {stdout} = await execa(binary, ['status']);
	return stdout === 'true';
};
