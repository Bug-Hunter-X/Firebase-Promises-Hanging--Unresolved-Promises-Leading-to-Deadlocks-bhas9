# Firebase Promises Hanging: Unresolved Promises Leading to Deadlocks

This repository demonstrates a common but difficult-to-debug issue in Firebase: promises that never resolve or reject. This can lead to application hangs and deadlocks.

## Problem

Firebase SDKs may occasionally return promises that become unresponsive, neither resolving nor rejecting. Standard promise `.catch()` blocks won't capture this, making debugging challenging. This often stems from network problems or internal Firebase errors.

## Solution

The solution involves implementing timeouts to prevent indefinite waits for Firebase promise resolution.  If a promise doesn't resolve within a reasonable timeframe, it's considered failed, and appropriate error handling is triggered.

## Usage

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies (if any).
4. Run the `bug.js` and `bugSolution.js` files to observe the problematic behavior and its resolution.

## Contributing

Contributions are welcome!  Feel free to open issues or submit pull requests.