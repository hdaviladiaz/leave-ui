heroku maintenance:on --app "$APP_FRONTEND-$APP_ENV"
git remote rm heroku
heroku git:remote -a "$APP_FRONTEND-$APP_ENV"
heroku config:set API_URL="https://$APP_BACKEND-$APP_ENV.herokuapp.com"
git push -f heroku master
heroku maintenance:off --app "$APP_FRONTEND-$APP_ENV"
