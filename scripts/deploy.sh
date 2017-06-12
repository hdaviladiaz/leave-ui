heroku maintenance:on --app "$1"
git remote rm heroku
heroku git:remote -a "$1"
heroku config:set API_URL="https://$2.herokuapp.com"
git push -f heroku master
heroku maintenance:off --app "$1"
