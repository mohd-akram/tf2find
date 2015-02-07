item.tf
=======

This is a bottle.py site that lets you search TF2 items and find the
ones you want. There are two main ways to search - you can either use regular
keyword search or search by classes and item tags
(eg. weapon, misc, hat, etc.). Once you find an item you want, you can get all
kinds of information about it such as its store price, market price and
crafting recipes to help you obtain it.
You can also search for item sets or view a list of them by typing 'sets'.

Get Started
-----------

Rename config.default.py to config.py and fill in your API keys in the file.

Run this command to install dependencies.

    pip3 install -r requirements.txt

You'll also need to install the [Redis server](http://redis.io/download).

Run update-cache.py to update the Redis cache. Then, simply launch main.py.

To host the site in Ubuntu 14.04 using gunicorn and nginx,
 clone into /var/www/item.tf and run the following in the project directory:

    sudo apt-get install nginx redis-server
    cp -rsf $PWD/etc /
    cd /etc/nginx/sites-enabled
    unlink default
    cd /etc/init.d
    update-rc.d gunicorn defaults

Structure
---------

There are three main files:

 * tf2.py - Contains the page handlers
 * tf2api.py - Contains the main functions for getting items, store prices,
 market prices and other information.
 * tf2search.py - Contains the parsing and search functions.

TF2 API
-------
tf2api.py has no dependencies and was designed to be used either for this
project or separately. It contains many helpful functions to get information
about items in TF2.

Example:
```python
>>> import tf2api
>>> schema = tf2api.getschema(apikey)
>>> items = tf2api.getitems(schema)
>>> itemsbyname = tf2api.getitemsbyname(schema)

>>> pan = items[264] # 264 is the defindex of the item, Or:
>>> pan = itemsbyname['Frying Pan']

>>> tf2api.getitemclasses(pan)
[u'Scout', u'Soldier', u'Pyro', u'Demoman', u'Heavy', u'Medic', u'Sniper']

>>> tf2api.getitemtags(pan)
['weapon', u'melee']
```

Thanks
------
This project was inspired by and depends on the great TF2 community to
function, so a special thanks to the following:

[Backpack.tf](http://backpack.tf)

[Trade.tf](http://trade.tf)

[TF2 Outpost](http://tf2outpost.com)

[TF2 Crafting Advisor](http://tf2crafting.info)

[TF2B](http://tf2b.com)
