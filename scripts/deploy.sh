echo 'START DEPLOY';

git checkout master;

npm version minor;

git checkout gh-pages;

git merge master;

PUBLIC_URL='./' npm run build;

cp -rf ./build/* ./;

git add -A .;

git commit -m 'update';

git push origin gh-pages;

git checkout dev;

git merge master;

echo 'END DEPLOY';
