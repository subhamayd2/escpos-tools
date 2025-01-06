
# Using PHP version 8.1

## Quick start

This project is requires:

- PHP 5.6 or better
- The `mbstring` and `imagick` extensions
- [composer](https://getcomposer.org/)

To install from source:

```bash
git clone https://github.com/receipt-print-hq/escpos-tools
cd escpos-tools
composer install
```

## Included utilities

### esc2text

`esc2text` extracts text and line breaks from binary ESC/POS files.

- [esc2text documentation](doc/esc2text.md)

### esc2html

`esc2html` converts binary ESC/POS files to HTML.

- [esc2html documentation](doc/esc2html.md)

### escimages

`escimages` extracts graphics from binary ESC/POS files in PBM and PNG format.

- [escimages documentation](doc/escimages.md)

## Contribute

- [CONTRIBUTING.md](CONTRIBUTING.md)

## Licensing

- [LICENSE.md](LICENSE.md)
