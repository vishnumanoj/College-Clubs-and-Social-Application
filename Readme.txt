1.	Open Terminal and run these commands
npm run build-watch
npm run delete && npm run build && concurrently -k -p "[{name}]" -n "TypeScript,Node" -c "yellow.bold,green.bold" "npm run watch-ts" "npm run 
watch-node"
rmdir /s /q "./dist/" || true
2.	Run the apk file