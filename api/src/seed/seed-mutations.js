export default /* GraphQL */ `
  mutation {
    u1: CreateUser(
        id: "1"
        username: "lucas.delboni", 
        name: "Lucas", 
        email: "lucas@localhost.com", 
        password: "root"
      ) {
        id
        username
        name
        email
        password
    }
    u2: CreateUser(
      id: "2"
      username: "adriana.oliveira",
      name: "Adriana",
      email: "adriana@localhost.com",
      password: "root"
    ) {
      id
      username
      name
      email
      password
    }
    u3: CreateUser(
      id: "3"
      username: "laury.bueno", 
      name: "Laury", 
      email: "laury@localhost.com", 
      password: "root"
    ) {
      id
      username
      name
      email
      password
    }
    u4: CreateUser(
      id: "4"
      username: "matheus.canon", 
      name: "matheus", 
      email: "matheus@localhost.com", 
      password: "root"
    ) {
      id
      username
      name
      email
      password
    }
    rss1: CreateRss(id: "1", page: "https://www.tecmundo.com.br/rss"){
      id
      page
    }
    article1: CreateArticle(id: "1", url: "https://www.tecmundo.com.br/google/42301-google-reader-devido-a-falta-de-desenvolvedores-interessados-nele.htm", title: "Google Reader morreu devido à falta de desenvolvedores interessados nele") {
      id
      url
      title
    }
    article2: CreateArticle(id: "2", url: "https://www.https://www.tecmundo.com.br/rss/57795-feedly-sofre-ataque-ddos-grupo-criminoso.htm", title: "Feedly sofre ataque DDoS de grupo criminoso") {
      id
      url
      title
    }
    ra1: AddUserReadArticles(from: {id: "1"}, to: { id: "1" }) {
      from {
        id
      }
    }
    ra2: AddUserReadArticles(from: {id: "1"}, to: { id: "2" }) {
      from {
        id
      }
    }
    la1: AddUserLikedArticles(from: {id: "1"}, to: { id: "1" }) {
      from {
        id
      }
    }
    da1: AddUserDislikedArticles(from: {id: "1"}, to: { id: "2" }) {
      from {
        id
      }
    }
    ufr1: AddUserFollowingRSS(from: {id: "1"}, to: {id: "1"}){
      from {
        id
      }
    }
    arw1: AddRssWrote(from: {id: "1"}, to: {id: "2" }){
      from {
        id
      }
    }
    arw2: AddRssWrote(from: {id: "1"}, to: {id: "1" }){
      from {
        id
      }
    }
  }
`;
