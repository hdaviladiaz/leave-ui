heroku maintenance:on --app "$1"
git remote rm heroku
heroku config:set API_URL="https://$2.herokuapp.com"
heroku git:remote -a "$1"
git push -f heroku master
heroku maintenance:off --app "$1"
