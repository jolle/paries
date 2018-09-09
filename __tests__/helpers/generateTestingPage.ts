import { generateJavascript } from './generateJavascript';
export const generateTestingPage = async () =>
    `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>[paries test]</title> </head> <body> [paries test] <script>${await generateJavascript()}</script> </body> </html>`;
