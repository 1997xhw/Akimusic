from django.views import View
from musicdl import musicdl
from SmartDjango import Analyse, P, PList
# from smartify import PList


class MusicView(View):
    @staticmethod
    @Analyse.r(b=[
        PList(name='targetsrcs', read_name='xxx').set_child(
            P('targetsrcs', '音乐平台').process(lambda x: x in ['qq', 'netease', 'baidu'])
        ),
        # P('targetsrcs', '音乐平台').process(list),
        P('musicname', '名字').process(str),

    ])
    def post(request):
        print(request.d.targetsrcs)
        config = {'logfilepath': 'musicdl.log', 'savedir': 'downloaded', 'search_size_per_source': 5, 'proxies': {}}
        target_srcs = request.d.targetsrcs
        client = musicdl.musicdl(config=config)
        search_results = client.search(request.d.musicname, target_srcs)
        items = []
        idx = 0
        for key, values in search_results.items():
            for value in values:
                print("singer: "+value["singers"] + "download_url" + value["download_url"])
                items.append([str(idx), value["singers"], value["download_url"], value['source']])
                idx += 1
        # print(search_results)
        return dict(items=items)
