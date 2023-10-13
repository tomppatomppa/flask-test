# https://flask-migrate.readthedocs.io/en/latest/#

In /web/
$ docker-compose exec web <command>

# Migration commands

$ flask db stamp head # To set the revision in the database to the head, without performing any migrations. You can change head to the required change you want.
$ flask db migrate # To detect automatically all the changes.
$ flask db upgrade # To apply all the changes.

# If something went wrong

$ flask db downgrade <commit id>
