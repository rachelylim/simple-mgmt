FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /simple-mgmt
WORKDIR /simple-mgmt
COPY Gemfile /simple-mgmt/Gemfile
COPY Gemfile.lock /simple-mgmt/Gemfile.lock
RUN bundle install