<p align="center">
    <img width="780" alt="Banner" src="https://github.com/mutasim77/logify/assets/96326525/288cfbb2-b1b0-4731-85f1-efee2747dd9a">
</p>
<p align="center">
    📝 Logify is a powerful, flexible, and easy-to-use logging library for JS/TS projects. 🗃️
</p>

## Features 🚀

- 🔴 Multiple log levels (ERROR, WARN, INFO, DEBUG)
- 🎨 Customizable formatters (Text and JSON)
- 🔌 Extensible transport system (Console and File included)
- ⚙️ Fully configurable
- 📱 React and Next.js(and any JS lib) friendly
- 🛡️ Written in TypeScript for type safety

## Installation 📦

```bash
npm install logify-ts
```

## Quick Start 🏃‍♂️
Here's an example of how to use the logger in a Next.js API route:

1. Create a file called logger.ts
```
your-project
    |_ app 
    |_ public
    |_ logger.ts 👈
```

Add the following code in logger.ts file

```js
import { Logger, LogLevel, ConsoleTransport, FileTransport, JsonFormatter } from 'logify-ts';

export const logger = new Logger({
    level: LogLevel.DEBUG,
    transports: [
        new ConsoleTransport(),
        new FileTransport('app.log', new JsonFormatter())
    ]
});
```

> [!NOTE]
> Logify is a flexible logging library that allows you to easily configure multiple transports and formatters for your logs.

2. Use logger in an API route
Create a file `api/test/route.ts` inside app dir

```
your-project
    |_ app 
    |  |_api 👈
    |    |_test 👈
    |       |_route.ts 👈
    |
    |_ public
    |_ logger.ts 
```

```js
import { logger } from "@/logger";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    logger.info(`Incoming GET request to /api/logger`);

    // Log request details
    logger.debug('Request details', {
        url: req.url,
        method: req.method,
        headers: Object.fromEntries(req.headers),
    });

    // Log query parameters
    const searchParams = req.nextUrl.searchParams;
    logger.debug('Query parameters', Object.fromEntries(searchParams));

    try {
        // Simulate some processing
        const result = await someAsyncOperation();

        logger.info('Operation successful', { result });

        return NextResponse.json({
            message: "success",
            status: 200,
            data: result
        });
    } catch (error) {
        logger.error('Error in GET /api/logger', {
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });

        return NextResponse.json({
            message: "Internal server error",
            status: 500,
        }, { status: 500 });
    } finally {
        logger.debug('Request processing completed');
    }
}

async function someAsyncOperation() {
    await new Promise(resolve => setTimeout(resolve, 100));
    return { key: 'value' };
}
```

> [!NOTE]
> This example provides a practical, real-world use case of your logger in a Next.js API route. It's concise yet informative, showing how to log different types of information at various stages of request processing.


## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request


## License 📄
LogSage is MIT licensed. See the [LICENSE](./LICENSE) file for details.

## Support 🆘
If you encounter any issues or have questions, please file an issue on GitHub issue tracker.

Built with ❤️ by [mutasim](https://www.mutasim.top)

Happy Logging! 🎉
