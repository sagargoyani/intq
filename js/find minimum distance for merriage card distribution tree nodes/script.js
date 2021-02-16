function solution(n, u, v, w, c, guestNodes, x, y) {
  let routes = [
    {
      route: [x],
      distance: 0,
    },
  ];

  let routesCount = 0;

  let minRoute;

  guestNodes = guestNodes.filter((item) => !(item === x));

  function validateRoute(route = [], distance = 0) {
    const isValid = route.some((item) => guestNodes.includes(item.toString()));
    // debugger
    if (minRoute && minRoute < distance) {
      return false;
    } else if (isValid) {
      if (minRoute > distance || !minRoute) {
        if (route[route.length - 1] === y) {
          minRoute = distance;
        }
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  function addRoute(route = [], distance = 0) {
    if (validateRoute(route, distance)) {
      routes.push({
        route,
        distance,
      });
      routesCount += 1;
      return routesCount;
    }

    return 0;
  }

  function findNextValidNodes(list, node) {
    let posNodes = [];
    let isValid = true;
    let temp;

    for (let index = 0; index <= u.length; index++) {
      isValid = true;
      let a = u[index];
      let b = v[index];
      const d = w[index];

      if (a === node || b === node) {
        if (b === node) {
          temp = a;
          a = b;
          b = temp;
        }

        if (list.length > 1) {
          list.reduce((cnode, nnode) => {
            if (cnode === a && nnode === b) {
              isValid = false;
            }
            return nnode;
          });
        }

        if (isValid) {
          const isExists = posNodes.find((item) => item[0] === b);
          if (isExists) {
            isValid = false;
          }
        }

        if (!isValid) continue;

        posNodes.push([b, d]);
      }
    }

    return posNodes;
  }

  function checkAndUpdateRoute(route, distance, posNextNodes, shift, res) {
    if (
      validateRoute(
        [...route, posNextNodes[0][0]],
        distance + +posNextNodes[0][1]
      )
    ) {
      res([...route, posNextNodes[0][0]], distance + +posNextNodes[0][1]);
    } else {
      shift();
      if (posNextNodes.length) {
        checkAndUpdateRoute(route, distance, posNextNodes, shift, res);
      }
    }
  }

  function findRoutes(rCount) {
    const item = routes[rCount];
    const lNode = item.route[item.route.length - 1];
    // debugger
    if (lNode === y) return;
    const posNextNodes = findNextValidNodes(item.route, lNode);
    if (posNextNodes.length) {
      const newRoute = [...item.route];
      const newItemDistance = item.distance;

      checkAndUpdateRoute(
        item.route,
        item.distance,
        posNextNodes,
        () => posNextNodes.shift(),
        (r, d) => {
          item.route = r;
          // item.route.push(r);
          item.distance = d;
          findRoutes(rCount);
        }
      );

      // item.route.push(posNextNodes[0][0]);
      // debugger
      // const itemDistance = item.distance + +posNextNodes[0][1];
      // item.distance = itemDistance;

      // posNextNodes.shift();

      posNextNodes.forEach((it) => {
        const newRCount = addRoute(
          [...newRoute, it[0]],
          newItemDistance + +it[1]
        );
        if (newRCount) {
          findRoutes(newRCount);
        }
      });
    }
  }

  findRoutes(routesCount);

  // const validRoutes = routes.filter((item) => {
  //   for (let i = 0; i < guestNodes.length; i++) {
  //     const gn = guestNodes[i];
  //     if (item.route.includes(gn)) return true;
  //   }

  //   return false;
  // });

  // return (
  //   (validRoutes.length &&
  //     Math.min(...validRoutes.map((item) => item.distance))) ||
  //   -1
  // );

  return minRoute || -1;
}

function runScript() {
  // let n = "5"; // numbers of nodes
  // let m = "6"; // numbers of edges

  // let u = ["1", "2", "2", "3", "4", "1"]; // from node
  // let v = ["2", "3", "4", "4", "5", "5"]; // to node
  // let w = ["5", "6", "6", "4", "1", "2"]; // time to travel the distance edge width

  // let c = "2"; // number of guests

  // let guestNodes = ["2", "3"]; // guest list

  // let x = "1"; // office node
  // let y = "5"; // home node
  // console.log("solution : ", solution(n, u, v, w, c, guestNodes, x, y));

  console.log("input : ", input);

  console.time("solution");
  for (let ii = 0; ii < input.length; ii++) {
    const element = input[ii];

    const { n, u, v, w, c, guestNodes, x, y } = element;

    console.log("solution : ", solution(n, u, v, w, c, guestNodes, x, y));
  }
  console.timeEnd("solution");
}

runScript();
