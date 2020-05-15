echo 'START DEPLOY';

git checkout master;

npm version minor;

git checkout gh-pages;

git merge master;

PUBLIC_URL='/middle.react.praktikum.yandex' npm run build;

mv build/* ../;

git add -A .;

git commit -m 'update';

git push origin gh-pages;

git checkout dev;

git merge master;

echo 'END DEPLOY';
