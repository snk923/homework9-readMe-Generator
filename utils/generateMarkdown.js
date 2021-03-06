function generateMarkdown(data) {
  return `
# Project Title : ${data.title}

![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)
#### ${data.deployed}
#### ${data.repo}

## Project Description:
${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Test
${data.test}

## Questions
If you have questions about this application please email: ${data.email}
Or visit my Github profile: https://github.com/${data.username}

## License
    ${data.license} Copyright (c) 2021 ${data.name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
}

module.exports = generateMarkdown;
