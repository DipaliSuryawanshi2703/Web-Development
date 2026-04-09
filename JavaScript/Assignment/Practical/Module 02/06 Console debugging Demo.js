// Regular console messages
        console.log("This is a standard log message.");
        console.log("Hello! Logging multiple values:", 42, true, {name: "Alice"});

       // Warning messages
        console.warn("This is a warning message.");
        console.warn("Be careful! Something might go wrong.");

        // Error messages
        console.error("This is an error message!");
        console.error("Oops! Something failed.", {errorCode: 500});

        // Debugging complex object
        const user = {
            name: "John Doe",
            age: 30,
            email: "john@example.com"
        };
        console.log("User object:", user);

        // Conditional logging
        const isDebugMode = true;
        if (isDebugMode) {
            console.log("Debug mode is ON");
        }