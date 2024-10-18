function useTraverse() {
  function insert(root, id, child) {
    if (root.id === id && root.isFolder) {
      if (!root.children) {
        root.children = [];
      }
      root.children.unshift(child);

      return root;
    }
    let latestNode = [];
    latestNode =
      root.children &&
      root.children.map((item) => {
        return insert(item, id, child);
      });
    return { ...root, children: latestNode };
  }

  function rename(root, id, name) {
    if (root.id === id) {
        root.name = name;

        return root;
    }

    let latestNode = [];
    latestNode =
      root.children &&
      root.children.map((item) => {
        return rename(item, id, name);
      });
    return { ...root, children: latestNode };
  }

  function deleteNode(root, id) {
    if (root.id === id) {
        if (!root.isFolder) {
            root ={};
        } else {
            root = null
        }

        return root;
    }

    let latestNode = [];
    latestNode =
      root.children &&
      root.children.map((item) => {
        return deleteNode(item, id);
      });
    return { ...root, children: latestNode };
  }

  return { insert, rename, deleteNode };
}

export default useTraverse;
