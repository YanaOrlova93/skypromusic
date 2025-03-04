import * as S from "../tracklist/styles.js"
import * as SS from "./../../components/playlist/styles.js"
import Filter from "../filter/filter.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import Search from "../search/search.jsx";

export default function TrackListSkeleton() {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <PlaylistTitle />
        <S.ContentPlaylist>

          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
            <img src="/img/skeleton/Group.svg"/>
            <img src="/img/skeleton/Rectangle11.svg"/>
            <img src="/img/skeleton/Rectangle12.svg"/>
            <img src="/img/skeleton/Rectangle13.svg"/>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
