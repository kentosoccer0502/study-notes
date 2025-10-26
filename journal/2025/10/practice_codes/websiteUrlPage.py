from typing import List


def websitePagination(urls: List[str], pageSize: int, page: int) -> List[str]:
    return paginate(urls, pageSize)[page - 1]


def paginate(urls: List[str], pageSize: int) -> List[List[str]]:
    return [urls[i : i + pageSize] for i in range(0, len(urls), pageSize)]


# websitePagination(["url1","url2","url3","url4","url5","url6"],4,1) --> [url1,url2,url3,url4]
# urls_with_page = [["url1","url2","url3","url4"], ["url5", "url6"]]
# -> page=1 -> urls_with_page[page-1]

# 別解
from typing import List


def websitePaginationV2(urls: List[str], pageSize: int, page: int) -> List[str]:
    start = (page - 1) * pageSize
    end = start + pageSize
    return urls[start:end]
