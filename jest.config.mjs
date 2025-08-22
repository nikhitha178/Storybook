export default {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                useESM: true,
                tsconfig: "tsconfig.app.json"
            }
        ]
    }
};
