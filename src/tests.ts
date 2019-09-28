const testsContext = (require as any).context('.', true, /\.spec\.tsx?$/);
testsContext.keys().forEach(testsContext);
